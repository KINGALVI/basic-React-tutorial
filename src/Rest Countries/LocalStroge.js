// Function to get the whitelist country data from local storage
const getWhitelistCountry = () => {
    // Retrieve the 'cart' data from local storage
    const whitelistCountryStringfy = localStorage.getItem('cart');
    // Check if 'cart' data exists
    if (whitelistCountryStringfy) {
        // Parse and return the data as an array
        return JSON.parse(whitelistCountryStringfy);
    }
    // If no data exists, return an empty array
    return [];
}

// Function to add a new ID to the whitelist country data
const addWhitelistCountry = id => {
    // Get the current whitelist country data
    const cart = getWhitelistCountry();
    // Add the new ID to the cart array
    cart.push(id);
    // Save the updated cart array back to local storage
    saveWhitelistCountry(cart);
}

// Function to save the whitelist country data to local storage
const saveWhitelistCountry = cart => {
    // Convert the cart array to a JSON string
    const whitelistCountry = JSON.stringify(cart);
    // Save the JSON string to local storage under the key 'cart'
    localStorage.setItem('cart', whitelistCountry);
}

export { addWhitelistCountry, getWhitelistCountry };