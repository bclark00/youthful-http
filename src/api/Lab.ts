const readRequisition = async (access_token?: string, order_id?: string) => {
  try {
    const response = await fetch(
      "/.netlify/functions/lab-order-requisition-read",
      {
        method: "POST",
        body: JSON.stringify({
          access_token,
          order_id
        })
      }
    );
    let data = await response.json();
    return { pdf: data.pdf, status: "succeeded" };
  } catch (e) {
    return {
      error: e,
      connected: false,
      authenticated: undefined,
      status: "disconnected"
    };
  }
};

const placeOrder = async (access_token: string, user_id: string) => {
  try {
    const response = await fetch("/.netlify/functions/lab-order-create", {
      method: "POST",
      body: JSON.stringify({
        access_token,
        user_id
      })
    });
    let data = await response.json();
    return { data, status: "succeeded" };
  } catch (error) {
    return {
      error,
      connected: false,
      authenticated: undefined,
      status: "disconnected"
    };
  }
};

export default {
  readRequisition,
  placeOrder
};
