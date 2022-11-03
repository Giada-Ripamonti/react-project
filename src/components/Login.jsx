import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetEmailAction, SetUsernameAction } from "../redux/actions/actions";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const loginName = useSelector((state) => state.user.name);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userEmail !== "" && userName !== "") {
      console.log(userName);
      console.log(userEmail);
      dispatch(SetUsernameAction(userName));
      dispatch(SetEmailAction(userEmail));
    }
  }, [userName, userEmail]);

  const handleSubmit = (e) => {
    e.prevevntDefault();
  };

  return (
    <>
      {loginName ? (
        <div className="flex flex-col justify-center mt-8">
          <h1 className="text-white text-2xl text-center my-5">
            Hi {loginName}!
          </h1>

          <button
            type="button"
            className="w-60 self-center inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => loginName === ""}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="block p-6 rounded-lg shadow-lg bg-gray-800 max-w-sm mx-auto mt-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput90"
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput91"
                placeholder="Email address"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Log in
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
