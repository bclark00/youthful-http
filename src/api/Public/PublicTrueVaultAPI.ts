const resetRequestPassword = async (username: string) => {
  try {
    const response = await fetch(
      "/.netlify/functions/user-password-reset-request",
      {
        method: "POST",
        body: JSON.stringify({
          username
        })
      }
    );
    let data = response.json();
    return data;
  } catch (e) {
    return {
      error: e,
      connected: false,
      authenticated: undefined,
      status: "disconnected"
    };
  }
};

const resetUpdatePassword = async (
  password: string,
  httpAuth: string,
  user_id: string
) => {
  try {
    const response = await fetch(
      "/.netlify/functions/user-password-reset-update",
      {
        method: "POST",
        body: JSON.stringify({
          httpAuth,
          user_id,
          password
        })
      }
    );
    let data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e,
      connected: false,
      authenticated: undefined,
      status: "disconnected"
    };
  }
};

const createUser = async (
  email: string,
  password: string,
  attributes: any
): Promise<any> => {
  try {
    const response = await fetch("/.netlify/functions/user-create", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        attributes
      })
    });
    let data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e,
      connected: false,
      authenticated: undefined,
      status: "disconnected"
    };
  }
};

const logIn = async (email: string, password: string) => {
  try {
    const response = await fetch("/.netlify/functions/user-login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    let data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e,
      connected: false,
      authenticated: undefined,
      status: "disconnected"
    };
  }
};

const logOut = async () => {
  const access_token = localStorage.getItem("access_token");
  try {
    const response = await fetch("/.netlify/functions/user-logout", {
      method: "POST",
      body: JSON.stringify({
        access_token
      })
    });
    let data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e,
      connected: false,
      authenticated: undefined,
      status: "disconnected"
    };
  }
};

const authCheck = async (access_token: string) => {
  try {
    const response = await fetch("/.netlify/functions/user-authcheck", {
      method: "POST",

      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        access_token
      })
    });
    let data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e,
      connected: false,
      authenticated: undefined,
      status: "disconnected"
    };
  }
};

const updateUserAttributes = async (
  access_token: string,
  user_id: string,
  attributes: object
) => {
  try {
    const response = await fetch("/.netlify/functions/user-update-attributes", {
      method: "POST",
      body: JSON.stringify({
        access_token,
        user_id,
        attributes
      })
    });
    let data = await response.json();
    return data;
  } catch (e) {
    return {
      error: e,
      connected: false,
      authenticated: undefined,
      status: "disconnected"
    };
  }
};

export default {
  authCheck,
  createUser,
  logIn,
  logOut,
  updateUserAttributes,
  resetUpdatePassword,
  resetRequestPassword
};
