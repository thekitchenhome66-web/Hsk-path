export default function Home() {
  return (
    <main style={{padding: "40px", fontFamily: "Arial"}}>
      <h1>HSK Path</h1>
      <p>Learn Chinese and prepare for HSK exams.</p>

      <div style={{marginTop: "20px"}}>
        <a href="/signup">
          <button style={{marginRight: "10px"}}>Sign Up</button>
        </a>

        <a href="/login">
          <button>Login</button>
        </a>
      </div>
    </main>
  )
}
