export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURI(property); //* why we encodeUri so to convert 'user name' inbto 'unser%20name' which an uriencoded string
    let encodedValue = encodeURI(params[property]); //* similary 'sourajit 123' whill be converted to "sourajit%20123"
    formBody(encodedKey + "=" + encodedValue); //* has [username='sourajit',password='123'] ,we need to join it
  }
  return formBody.join("&");  //? gives me 'username=sourajit&password=123'
}
