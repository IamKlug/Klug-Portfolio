import './App.css'

function App() {

  return (
    <>
      <div className='has-background-primary-light'>
      <nav className="navbar navbar-item has-background-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className='navbar-item has-text-white title is-2 letter-spacing-2px'>Martin Klug-Noble</div>
        </div>
      </nav>


        <div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center mb-6'>
          <h1 className='title is-1 has-text-centered'>Hi I'm Martin</h1>
          <div className='img-width25 is-relative m-3 '>

          <figure className='image is-3by5'>  
            <img className='is-rounded' src='src/assets/tiny-head-shot.png' />

          </figure>
          </div>
            <p className='subtitle has-text-centered'>I build software</p>
        </div>

        <div className='title has-text-centered is-underlined'>
          Projects
        </div>
        <h1 className='subtitle has-text-white'></h1>
        <div className='columns mx-3'>
          <div className='column is-offset-1 is-10'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <div className='box has-background-primary'>          
                <div className='is-relative'>
                    <span className='tag is-link is-medium'>Click the Image to check it out!</span>
                    <figure className='image'>
                      <a href='https://klug-task-management-git-master-iamklug.vercel.app/'><img className='' src='src/assets/tiny-kanban-image.png' /></a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className='column has-text-centered'>
                <div className='box has-background-success'>
                <div className='is-relative'>
                <span className='tag is-link is-medium'>This one too! This one's a treat!</span>
                    <figure className='image'>
                      <a href='https://multi-step-form-vercel-iamklug.vercel.app/'><img className='' src='src/assets/tiny-form-image.png' /></a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className='title has-text-centered is-underlined'>
          My Skills
        </div>
        
        <div className='columns mx-3'>
          <div className='column is-offset-one-fifth is-three-fifths'>
            <div className='columns'>
              <div className='column has-text-centered'><div className='box box has-background-primary'>HTML</div></div>
              <div className='column has-text-centered'><div className='box has-background-success'> CSS</div></div>
              <div className='column has-text-centered'><div className='box box has-background-primary'>Javascript</div></div>
            </div>
          </div>
        </div>
        <div className='columns mx-3'>
          <div className='column is-offset-one-fifth is-three-fifths'>
            <div className='columns'>
              <div className='column has-text-centered'><div className='box has-background-success'>React</div></div>
              <div className='column has-text-centered'><div className='box has-background-primary'>Bulma(CSS framework)</div></div>
            </div>
          </div>
        </div>

        <div className='is-size- has-text-centered is-underlined'>
          Skills in development 
        </div>

        <div className='columns mx-3'>
          <div className='column is-offset-one-fifth is-three-fifths'>
            <div className='columns'>
              <div className='column has-text-centered'><div className='box has-background-success'>Node</div></div>
              <div className='column has-text-centered'><div className='box box has-background-primary'>Express</div></div>
              <div className='column has-text-centered'><div className='box has-background-success'>Mongoose</div></div>
            </div>
          </div>
        </div>
        <footer className='footer has-background-success-light'>
        <div className='columns'>
          <div className='column is-offset-2 is-8'>
            <div className='columns'>
              <div className='column'>
                <h1 className='title'>Contact</h1>
                <p className=''>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
              </div>
              <div className='column'>
              <form
                action="https://formspree.io/f/xaygjejr"
                method="POST"
              >
                <input className='input is-primary my-1' name='name' placeholder='Name'></input>
                <input className='input is-primary my-1' name='email' placeholder='Email'></input>
                <textarea className='textarea is-primary has-fixed-size my-1' name='message' placeholder='Message'></textarea>
                <button className='button is-primary is-outlined my-1'>Send Message</button>
              </form>
              </div>
            </div>
          </div>
        </div>
        </footer>

      </div>
    </>
  )
}

export default App
