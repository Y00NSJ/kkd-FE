import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";
import Layout from "../layouts/Layout";
import React, { useState } from "react";

const friends = [
  { username: "alice" },
  { username: "charlie" },
  { username: "eve" },
];

const friendRequests = [{ username: "bob" }, { username: "dave" }];

const dreams = {
  alice: [
    { title: "Alice's Dream 1", content: "꿈 내용 1" },
    { title: "Alice's Dream 2", content: "꿈 내용 2" },
  ],
  charlie: [
    { title: "Charlie's Dream 1", content: "꿈 내용 1" },
    { title: "Charlie's Dream 2", content: "꿈 내용 2" },
  ],
  eve: [{ title: "Eve's Dream 1", content: "꿈 내용 1" }],
};

const ListFriendPage = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelectFriend = (username) => {
    setSelectedFriend(username);
  };

  const handleBackToFriends = () => {
    setSelectedFriend(null);
  };

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <div className="min-h-screen flex items-center justify-center  overflow-hidden">
        {/* 친구 목록 섹션 */}
        <div
          className={`transition-all duration-500 ${
            selectedFriend ? "w-1/4" : "w-1/2"
          }  p-6 rounded-lg `}
        >
          <h2
            className={`text-black mb-4 text-2xl font-bold ${
              isDarkMode ? "dark-text" : "light-text"
            }`}
          >
            친구 목록
          </h2>
          <ul className="space-y-4">
            {friends.map((friend, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-white bg-opacity-60 dark:bg-opacity-20 hover:scale-105 backdrop-blur-md p-4 rounded-lg shadow-lg transition-transform hover:shadow-2xl cursor-pointer"
                onClick={() => handleSelectFriend(friend.username)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                  <span
                    className={`text-lg ${
                      isDarkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    {friend.username}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the onClick of the li
                    console.log(`${friend.username} removed`);
                  }}
                  className=" text-gray-200 py-2 rounded-md hover:text-red-500"
                >
                  ✗
                </button>
              </li>
            ))}
          </ul>

          {/* 친구 요청 */}
          <div className="mt-10">
            <h2
              className={`text-black mb-4 text-xl font-bold ${
                isDarkMode ? "dark-text" : "light-text"
              }`}
            >
              친구 요청
            </h2>
            <ul className="space-y-3">
              {friendRequests.map((request, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-white bg-opacity-60 dark:bg-opacity-20 hover:scale-105 backdrop-blur-md p-4 rounded-lg shadow-lg transition-transform hover:shadow-2xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    <span
                      className={`text-base ${
                        isDarkMode ? "text-gray-200" : "text-gray-900"
                      }`}
                    >
                      {request.username}
                    </span>
                  </div>
                  <button
                    onClick={() => console.log(`${request.username} accepted`)}
                    className="bg-purple-400 text-white px-3 py-1 rounded-md text-sm "
                  >
                    수락
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 친구의 Dream List 섹션 */}
        {selectedFriend && (
          <div className="w-3/4 p-6 rounded-lg shadow-lg transition-all duration-500">
            <button
              className=" text-gray-200 py-2 rounded-md hover:text-blue-500 mb-4"
              onClick={handleBackToFriends}
            >
              ←
            </button>
            <h2
              className={`text-black mb-4 text-2xl font-bold ${
                isDarkMode ? "dark-text" : "light-text"
              }`}
            >
              {selectedFriend}의 꿈 목록
            </h2>
            <ul className="space-y-4">
              {dreams[selectedFriend]?.map((dream, index) => (
                <li
                  key={index}
                  className="bg-white bg-opacity-60 dark:bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-lg"
                >
                  <h3
                    className={`text-lg font-bold ${
                      isDarkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    {dream.title}
                  </h3>
                  <p
                    className={`text-base ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}
                  >
                    {dream.content}
                  </p>
                </li>
              )) || <p className="text-gray-500">꿈 목록이 없습니다.</p>}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ListFriendPage;
