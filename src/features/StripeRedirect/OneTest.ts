const ENVIRONMENT = process.env.NODE_ENV;

//@ts-ignore
const stripe = window.Stripe(
  ENVIRONMENT === "production"
    ? "pk_live_Lj26kUtsasc4TE1w33uUAnfV00uAjdksbg"
    : "pk_test_hPVUep5cWT8b6ncMFTtEpPCA00x1MVAKHw"
);

export const plusRedirect = async (user_id: string, optedOut: boolean) => {
  const skuPicker = () => {
    if (ENVIRONMENT === "development") {
      if (optedOut === true) {
        return "sku_G5y8T3oTt0GfRF";
      } else {
        return "sku_G5y7sdOGX4Q4ZC";
      }
    } else if (ENVIRONMENT === "production") {
      if (optedOut === true) {
        return "sku_G29mqI59jjkBJc";
      } else {
        return "sku_G29myZm1yglTz5";
      }
    } else alert("nope");
  };

  const urlPicker = () => {
    if (ENVIRONMENT === "development") {
      return "http://localhost:3000/";
    } else if (ENVIRONMENT === "production") {
      return "https://preconception.app/";
    } else return "https://preconception.app/";
  };

  try {
    await stripe.redirectToCheckout({
      // Unique User ID
      clientReferenceId: `${user_id}`,
      items: [
        // Replace with the ID of your SKU
        { sku: skuPicker(), quantity: 1 }
      ],
      successUrl: urlPicker(),
      cancelUrl: urlPicker()
    });
  } catch (result) {
    // Display result.error.message to your customer
    // setError(result.error.message);
    return result.error;
  }
};
