// File: App.jsx located in src folder
function App() {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "5px" }}>
      <h1>This is main componenet (App.jsx)</h1>
      {/* container 1: header */}
      <div style={{ backgroundColor: "blue", color: "white" }}>
        <h1>Web Development Course</h1>
        <p>
          In this course, you will learn about React, Next, Nest, Express and
          mongoDB
        </p>
      </div>
      {/* container 2: Navbar */}
      <div style={{ backgroundColor: "green", color: "white" }}>
        <h1>Nav Bar</h1>
        <p>This is navbar container</p>
      </div>
      {/* container 3: Home Page */}
      <div style={{ backgroundColor: "yellow", color: "white" }}>
        <h1>Home page</h1>
        <p>This is home page container</p>
      </div>
      {/* container 4: Registration */}
      <div style={{ backgroundColor: "magenta", color: "white" }}>
        <h1>Registration</h1>
        <p>This is Registration container</p>
      </div>
      {/* container 5: Login */}
      <div style={{ backgroundColor: "pink", color: "white" }}>
        <h1>Login</h1>
        <p>This is Login container</p>
      </div>
      {/* container 6: Diary */}
      <div style={{ backgroundColor: "red", color: "white" }}>
        <h1>Diary</h1>
        <p>This is Diary container</p>
      </div>
      {/* container 7: Footer */}
      <div style={{ backgroundColor: "cyan", color: "white" }}>
        <h1>Footer</h1>
        <p>This is Footer container</p>
      </div>
    </div>
  );
}
export default App;
