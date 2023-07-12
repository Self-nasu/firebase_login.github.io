 function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // Handle successful login
        var user = result.user;
        console.log(user);
      })
      .catch(function(error) {
        // Handle error
        console.log(error);
      });
  }

  function signInWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // Handle successful login
        var user = result.user;
        console.log(user);
      })
      .catch(function(error) {
        // Handle error
        console.log(error);
      });
  }

  function signInWithGitHub() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        // Handle successful login
        var user = result.user;
        console.log(user);
      })
      .catch(function(error) {
        // Handle error
        console.log(error);
      });
  }

  function signInWithOTP() {
    var phoneNumber = "7877452256"; // Replace with user's phone number
    var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        // OTP sent successfully
        var verificationCode = prompt("Please enter the verification code sent to your phone.");
        return confirmationResult.confirm(verificationCode);
      })
      .then(function(result) {
        // Handle successful OTP login
        var user = result.user;
        console.log(user);
      })
      .catch(function(error) {
        // Handle error
        console.log(error);
      });
  }