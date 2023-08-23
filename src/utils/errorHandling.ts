export const handleError = (error: any) => {
    console.error(error);
    if (error.response && error.response.data.errors) {
      const errorMessages = Object.values(error.response.data.errors);
      for (const errorMessage of errorMessages) {
        alert(errorMessage);
      }
    } else {
      alert('An error occurred.');
    }
    return error;
  };
  