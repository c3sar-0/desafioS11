const url = "https://jsonplaceholder.typicode.com/users";
const form = document.getElementById("form");
const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const birthDateInput = document.getElementById("birthDateInput");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    birthDate: birthDateInput.value,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const resData = await res.json();
      console.log("resData: ", resData);
    } else {
      throw Error("An error ocurred!");
    }
  } catch (err) {
    console.log(err);
  }
});
