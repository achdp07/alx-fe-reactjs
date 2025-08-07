function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg" >
      <img className="rounded-full w-36 h-36 mx-auto" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww " alt="User" />
      <h1 className="text-xl text-blue-800 my-4" >Ash DIOP</h1>
      <p className=" text-gray-600 text-base">Developer at Bittwok loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;