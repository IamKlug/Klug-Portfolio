import "./App.css";

function App() {
  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="">
        <nav
          className="navbar q-navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="title is-4 letter-spacing-2px fade-in-effect responsive-div"></div>
          <div className="columns is-mobile fade-in-effect">
            <a href="https://github.com/IamKlug" className="column is-clickable bounce">
              <svg
                className="has-background-black p-1"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3035 0C5.50583 0 0 5.50583 0 12.3035C0 17.7478 3.52188 22.3463 8.41254 23.9765C9.02771 24.0842 9.2584 23.715 9.2584 23.3921C9.2584 23.0999 9.24302 22.131 9.24302 21.1005C6.15176 21.6696 5.35203 20.347 5.10596 19.6549C4.96755 19.3012 4.36775 18.2092 3.84485 17.917C3.41423 17.6863 2.79905 17.1173 3.82947 17.1019C4.79838 17.0865 5.49045 17.9939 5.72114 18.363C6.82846 20.2239 8.59709 19.701 9.30454 19.3781C9.4122 18.5783 9.73516 18.04 10.0889 17.7325C7.35136 17.4249 4.49079 16.3637 4.49079 11.6576C4.49079 10.3196 4.96755 9.21227 5.7519 8.35102C5.62886 8.04343 5.19824 6.78232 5.87493 5.09058C5.87493 5.09058 6.90535 4.76762 9.2584 6.3517C10.2427 6.07487 11.2885 5.93645 12.3343 5.93645C13.3801 5.93645 14.4259 6.07487 15.4102 6.3517C17.7632 4.75224 18.7936 5.09058 18.7936 5.09058C19.4703 6.78232 19.0397 8.04343 18.9167 8.35102C19.701 9.21227 20.1778 10.3042 20.1778 11.6576C20.1778 16.3791 17.3018 17.4249 14.5643 17.7325C15.0103 18.1169 15.3948 18.8552 15.3948 20.0086C15.3948 21.6542 15.3794 22.9768 15.3794 23.3921C15.3794 23.715 15.6101 24.0995 16.2253 23.9765C18.6676 23.1519 20.79 21.5821 22.2936 19.4882C23.7972 17.3941 24.6063 14.8814 24.6071 12.3035C24.6071 5.50583 19.1012 0 12.3035 0Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/martin-klug-noble/" className="column is-clickable bounce">
              <svg
                className="has-background-black p-1"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  clipRule="evenodd"
                  d="M5.5513 3.3042C4.41165 3.3042 3.48447 4.23017 3.48447 5.36833C3.48447 6.50724 4.41165 7.4338 5.5513 7.4338C6.68872 7.4338 7.61408 6.50724 7.61408 5.36833C7.61408 4.23017 6.68872 3.3042 5.5513 3.3042ZM3.76655 8.99818V20.4515H7.32916L7.33051 8.99818H3.76655ZM9.56465 8.99713V20.4503L13.1192 20.4517L13.1206 14.7845C13.1206 13.3298 13.3739 11.8429 15.2535 11.8429C17.1044 11.8429 17.1044 13.5976 17.1044 14.879V20.4503L20.6629 20.449V14.1689C20.6629 11.3348 20.1456 8.71224 16.3929 8.71224C14.6304 8.71224 13.4769 9.70851 13.0247 10.5618H12.9747L12.9747 8.99713H9.56465ZM22.4355 24H1.98187C1.00598 24 0.212036 23.223 0.212036 22.268V1.73068C0.212036 0.776376 1.00598 0 1.98187 0H22.4355C23.4151 0 24.212 0.776376 24.212 1.73068V22.268C24.212 23.223 23.4151 24 22.4355 24Z"
                  fill="white"
                />
              </svg>
            </a>
            <div onClick={scrollDown} className="column is-clickable bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM12 12.4828L4.92844 6H19.0716L12 12.4828ZM9.25406 12L3.75 17.0447V6.95531L9.25406 12ZM10.3641 13.0172L11.4891 14.0531C11.6274 14.1801 11.8084 14.2506 11.9963 14.2506C12.1841 14.2506 12.3651 14.1801 12.5034 14.0531L13.6284 13.0172L19.0659 18H4.92844L10.3641 13.0172ZM14.7459 12L20.25 6.95438V17.0456L14.7459 12Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
          </div>
        </nav>

        <div className="is-flex-tablet is-justify-content-end is-align-items-center py-6 my-6 ml-6 fade-in-effect">
          <div className="">
          <h1 className="title is-1 has-text-left">Hi I'm Martin</h1>
          <p className="subtitle has-text-left">I build websites</p>
          </div>
          <div className="img-width25 is-relative m-6">
            
            <figure className="image is-3by5">
              <img className="" src="tiny-headshot.png" />
            </figure>
          </div>
          <div className="p-6 m-6"></div>
        </div>
        
        <div className="title has-text-centered is-underlined">Projects</div>
        <h1 className="subtitle has-text-white"></h1>
        <div className="columns mx-3">
          <div className="column is-offset-1 is-10">
            <div className="columns">
              <div className="column has-text-centered">
                <div className="box has-background-primary">
                  <div className="is-relative">
                    <span className="tag is-link is-medium">
                      Click the Image to check it out!
                    </span>
                    <figure className="image">
                      <a
                        href="https://klug-task-management-git-master-iamklug.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="tiny-kanban.png" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column has-text-centered">
                <div className="box has-background-success">
                  <div className="is-relative">
                    <span className="tag is-link is-medium">
                      This one too! This one's a treat!
                    </span>
                    <figure className="image">
                      <a
                        href="https://multi-step-form-vercel-iamklug.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="tiny-payment-form.png" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="column has-text-centered">
                <div className="box has-background-primary">
                  <div className="is-relative">
                    <span className="tag is-link is-medium">
                      Click the Image to check it out!
                    </span>
                    <figure className="image">
                      <a
                        href="https://audiophile-wheat.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="audiophile.png" />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="title has-text-centered is-underlined">My Skills</div>

        <div className="columns mx-3">
          <div className="column is-offset-one-fifth is-three-fifths">
            <div className="columns">
              <div className="column has-text-centered">
                <div className="box box has-background-primary">HTML</div>
              </div>
              <div className="column has-text-centered">
                <div className="box has-background-success"> CSS</div>
              </div>
              <div className="column has-text-centered">
                <div className="box box has-background-primary">Javascript</div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns mx-3">
          <div className="column is-offset-one-fifth is-three-fifths">
            <div className="columns">
              <div className="column has-text-centered">
                <div className="box has-background-success">React</div>
              </div>
              <div className="column has-text-centered">
                <div className="box has-background-primary">
                  Bulma(CSS framework)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="has-text-centered is-underlined">
          Skills in development
        </div>

        <div className="columns mx-3">
          <div className="column is-offset-one-fifth is-three-fifths">
            <div className="columns">
              <div className="column has-text-centered">
                <div className="box has-background-success">Node</div>
              </div>
              <div className="column has-text-centered">
                <div className="box box has-background-primary">Express</div>
              </div>
              <div className="column has-text-centered">
                <div className="box has-background-success">Mongoose</div>
              </div>
            </div>
          </div>
        </div>
        <div className="is-flex is-justify-content-center mt-5">
        <figure className="image is-128x128 bounce is-clickable">
              <img className="" src="cartoon-kitty.png" />
            </figure>
            </div>
        <footer className="footer has-background-success-light z-10">
          <div className="columns">
            <div className="column is-offset-2 is-8">
              <div className="columns">
                <div className="column">
                  <h1 className="title">Contact</h1>
                  <p className="">
                    I would love to hear about your project and how I could
                    help. Please fill in the form, and I’ll get back to you as
                    soon as possible.
                  </p>
                </div>
                <div className="column">
                  <form action="https://formspree.io/f/xaygjejr" method="POST">
                    <input
                      className="input is-primary my-1"
                      name="name"
                      placeholder="Name"
                    ></input>
                    <input
                      className="input is-primary my-1"
                      name="email"
                      placeholder="Email"
                    ></input>
                    <textarea
                      className="textarea is-primary has-fixed-size my-1"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                    <button className="button is-primary is-outlined my-1">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </div>
    </>
  );
}

export default App;
