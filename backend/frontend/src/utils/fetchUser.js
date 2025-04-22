export const fetchUser = function () {
  return localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : localStorage.clear();
}

export const dummyUser = {
  googleId: "109804445347586726961",
  imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocLbSlRn4XP5SG_HaOXPMUdWiRvXo3QSH__s3D-jE62xKMM=s96-c",
  email: "dkq.411@gmail.com",
  name: "Dummy",
  givenName: "Dummy User",
  familyName: "Dummyson"
};