const clientId = '';
//const redirectUri = "http://nathanajammmingproject.surge.sh";
const redirectUri = "http://192.168.1.68:3000/";
let accessToken;

const Spotify = {
  //If the users access token is already set, we don't need one
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    //check for an access token match in the url
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    //if both of these exist in the url
    if (accessTokenMatch && expiresInMatch) {
      //access1, because regex is an array, second is the value
      accessToken = accessTokenMatch[1];
      //need it to be a number
      const expiresIn = Number(expiresInMatch[1]);
      //Clearing the URL so the app doesn't try to get an expired token
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      //we need to request a new token
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      //changes what's in the URL bar to the access URL
      window.location = accessUrl;
    }
  },
  getPlaylists() {
    const userAccessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${userAccessToken}`
    }
    let userID;
    return fetch('https://api.spotify.com/v1/me', {headers: headers}).then((response) => response.json())
    .then((jsonResponse) => {
      userID = jsonResponse.id
      return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        headers: headers,
        method: 'GET'
      }).then((response) => {
        return response.json()
      }).then((jsonResponse) => {
        if (!jsonResponse.items) {
          return []
        }
        console.log(jsonResponse)
        return jsonResponse.items.map((playlist) => ({
          name: playlist.name,
          id: playlist.id
        }))
      })
    })
  },
  //making a request to the spotify API
  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          //if there are no tracks in the response
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },
  savePlaylist(playlistName, UriArray) {
    if (!playlistName ||!UriArray.length) {
        return;
    } else {
        const userAccessToken = Spotify.getAccessToken();
        const headers = {
            Authorization: `Bearer ${userAccessToken}`
        }
        let userID;
        return fetch('https://api.spotify.com/v1/me', {
            headers: headers
        }).then((response) => response.json()).then((jsonResponse) => {
            userID = jsonResponse.id
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: playlistName})
            }).then((response) => response.json()).then((jsonResponse) => {
              const playlistId = jsonResponse.id;
              return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistId}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({uris: UriArray})
              })
            })
        })
    }
  }
};

export default Spotify;