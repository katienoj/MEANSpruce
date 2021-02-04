var client_id = process.env.g_client_id || "784156431685-5p4u1e71cdmt06q08c115hth9u2nb79h.apps.googleusercontent.com",
  client_secret = process.env.g_client_secret || "p0dix0UTdd7aYdaEp6zGmLJv",
  redirect_uri =
    process.env.g_redirect_uri || "localhost:8000/account/oauth/google",
  auth_url =
    "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=" +
    redirect_uri +
    "&scope=profile%20email&client_id=" +
    client_id;

    //testing

module.exports = {
  client_id: client_id,
  client_secret: client_secret,
  auth_url: auth_url,
  redirect_uri: redirect_uri
};
