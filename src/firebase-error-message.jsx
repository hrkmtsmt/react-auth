export const emailErrorMessage = (message) => {
  if (message === "auth/invalid-email") {
    return "This Email Invalid";
  } else if (message === "auth/email-already-exists") {
    return "This Email Already Exsits";
  } else {
    return "Error";
  }
};
export const passwordErrorMessage = (message) => {
  if (message === "auth/invalid-password") {
    return "6 Characters or More";
  } else if (message === "auth/email-already-exists") {
    return "This Email Already Exsits";
  } else if (message === "auth/wrong-password") {
    return "This Email Already Exsits";
  } else {
    return "Error";
  }
};
