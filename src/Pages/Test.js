import React from "react"

const Test = () => {
  return (
    <>
      <div className="page-container">
        <h1>Hey 👋 this is Dave's sandbox</h1>
        <div className="code-container">
          <details>
            <summary>&#9660;&#9650;Show</summary>
            Just testing the new details and summary elements! <br />
            <code>
              <pre>
                {`
<details>
  <summary>Details</summary>
  put some content here 👍
</details>`}
              </pre>
            </code>
          </details>
        </div>
      </div>

      <div className="code-container">
        <details>
          <summary>&#9660;&#9650;Expand this</summary>
          Another example of a details/summary expandable element! <br />
          <code>👍</code>
        </details>
      </div>
    </>
  )
}

export default Test
