import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import App from "./App"
import Settings from "./routes/Settings"
import Documentation from "./routes/Documentation"

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  errorElement: <div>404</div> //replace with 404 page
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/documentation",
    element: <Documentation />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)