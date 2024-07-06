
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  export const validateIPAddress = (ipAddress) => {
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$|^[\da-fA-F:]+$/;
    return ipRegex.test(ipAddress);
  };
  