import { useState } from "react";
import Button from "./button";
import Input from "./input";
import { BASE_URL } from "@/constants";

const CustomerModal = ({ setIsCustomerModalActive, bookID }) => {
  const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");
  const [isNewUser, setIsNewUser] = useState(null);

  const getUserByID = () => {
    fetch(`${BASE_URL}/customer/${userID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          if (data.error === "User ID not found.") {
            setIsNewUser(true);
          } else {
            alert(data.error);
            console.log(data.error);
          }
        } else {
          setIsNewUser(false);
          setUserName(data.data.name);
        }
      });
  };

  const createUser = () => {};

  const borrowBook = () => {
    fetch(`${BASE_URL}/book/${userID}/${bookID}`, {
      method: "PUT",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          console.log(data.error);
        } else {
          setIsCustomerModalActive(false);
        }
      });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isNewUser === null) {
      getUserByID();
      console.log(userID);
      return;
    }
    if (isNewUser) {
      createUser();
      return;
    }
    borrowBook();
  };

  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <div className="bg-slate-200 m-auto py-8 px-16 rounded-lg">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl text-gray-800 mb-6">Jey</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <Input
              type="text"
              label="User ID"
              id="userID"
              disabled={isNewUser !== null}
              value={userID}
              placeholder="User City ID"
              onChange={({ target }) => setUserID(target.value)}
            />
          </div>
          {isNewUser && (
            <div className="mb-5">
              <Input
                type="text"
                label="User Name"
                id="userID"
                value={userName}
                placeholder="User City ID"
                onChange={({ target }) => setUserName(target.value)}
              />
            </div>
          )}
          {isNewUser === false && (
            <div className="mb-5">
              <h3 className="block mb-2 text-md text-gray-900 font-bold">
                User Name
              </h3>
              <p>{userName}</p>
            </div>
          )}
          <div className="flex justify-around mt-8">
            <Button
              type="button"
              label="Close"
              color="bg-red-800"
              onClick={() => setIsCustomerModalActive(false)}
            />
            <Button
              type="submit"
              label={
                isNewUser
                  ? "Save and Borrow"
                  : isNewUser === null
                  ? "Check ID"
                  : "Borrow"
              }
              color="bg-green-800"
            />
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default CustomerModal;
