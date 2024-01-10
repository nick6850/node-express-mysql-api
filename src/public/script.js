async function submitEditProfileForm(event) {
  event.preventDefault();

  // Get form fields
  const editUserId = document.getElementById("editUserId").value;
  const editFirstName = document.getElementById("editFirstName").value;
  const editLastName = document.getElementById("editLastName").value;

  // Construct the request body
  const requestBody = {
    userId: editUserId,
    firstName: editFirstName,
    lastName: editLastName,
  };

  // Make the PUT request
  try {
    const response = await fetch(
      `http://localhost:3001/profile/${editUserId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (response.ok) {
      const { user: updatedProfile } = await response.json(); // Access the 'user' property

      console.log("Updated Profile:", updatedProfile);

      window.alert(
        "Profile updated successfully. Check the console for new data"
      );
    } else {
      window.alert(
        "Failed to update profile. Enter an ID that matches your JWT."
      );
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    window.alert("Failed to update profile");
  }
}

async function getUserById(event) {
  event.preventDefault();

  const userId = document.getElementById("userId").value;

  try {
    const response = await fetch(`http://localhost:3001/profile/${userId}`);

    if (response.ok) {
      const userData = await response.json();
      console.log("User Data:", userData);
      window.alert(
        "User data retrieved successfully. Check the console for details."
      );
    } else {
      console.error("Failed to retrieve user data:", response.statusText);
      window.alert(
        "Failed to retrieve user data. Please check the ID and try again."
      );
    }
  } catch (error) {
    console.error("Error retrieving user data:", error.message);
    window.alert("Failed to retrieve user data. Please try again.");
  }
}

async function getAllProfiles(event) {
  event.preventDefault();
  const page = document.getElementById("page").value;

  try {
    const response = await fetch(
      `http://localhost:3001/profiles?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      alert("Users retrieved successfully. Check the console for details.");
      console.log("Users:", data.profiles);
    } else {
      alert("Failed to get users. Please log in as admin or try another page.");
      console.error("Failed to get users:", response);
    }
  } catch (error) {
    alert("Failed to get users. Please log in as admin.");
    console.error("Error getting users:", error.message);
  }
}
