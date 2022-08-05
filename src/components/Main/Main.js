import reactAppImg from "../../assets/Image-02.PNG";
import filesStructureImg01 from "../../assets/Image-03.PNG";
import readmeImg from "../../assets/Image-04.PNG";
import indexJsCodeImg from "../../assets/Image-05.PNG";
import appJsCodeImg from "../../assets/Image-06.PNG";
import indexHtmlCodeImg from "../../assets/Image-07.PNG";
import filesStructureImg02 from "../../assets/Image-08.PNG";
import filesStructureImg03 from "../../assets/Image-09.PNG";
import appJsImg from "../../assets/Image-10.PNG";
import homeJsImg from "../../assets/Image-11.PNG";
import headerJsImg from "../../assets/Image-12.PNG";
import mainJsImg from "../../assets/Image-13.PNG";
import filesStructureImg04 from "../../assets/Image-14.PNG";
import "./main.css";

function Main() {
  return (
    <main>
      <p>
        I was recently doing another React project and decided to write down a
        few of the starting steps, so I can reread them at some point in the
        future and see if it still what I do.<br></br>
        <br></br>
        These are just personal thoughts that worked for me so far, so nothing
        too "best-practicey" and "best-approachey".<br></br>
        <br></br>
        To make a visual example, I've sort of recreated this text into React
        code and deployed it through <a href="https://vercel.com/">Vercel</a> (a
        very simple page, just to show how it supposed to work). The result can
        be seen{" "}
        <a href="https://how-to-start-create-react-app.vercel.app/">here</a> and
        the repo is{" "}
        <a href="https://github.com/Dimterion/How-to-start-create-react-app">
          here.
        </a>
        <br></br>
        <br></br>
        To simplify things I use{" "}
        <a href="https://create-react-app.dev/">Create React App</a> and my code
        editor is <a href="https://code.visualstudio.com/">VSCode</a>.<br></br>
        <br></br>
        <i>Note:</i> I also use <a href="https://prettier.io/">Prettier</a> to
        make the code look more or less "in-shape", but that's not really
        necessary, so I won't go through the details about it. In my code it
        just adds identical tab widths of 2, semicolons and double quotes.
        Otherwise, if seen on the further screenshots, the file{" "}
        <b>.prettierrc</b> can be ignored.<br></br>
        <br></br>
        When you start a new app it will be created within a new folder
        automatically, so, if you already created one and choose it as initial,
        you should know that your app will be there in a separate folder. Unless
        you want this, make sure to choose a folder you need. Otherwise you will
        have a folder within a folder.<br></br>
        <br></br>
        Once the directory is chosen, open the terminal and use the following
        command (make sure to replace the <b>my-app</b> part with the name of
        your project or how you would like your project folder to be called,
        because this is going to be its name; use "kebab-case-format" for it):
        <br></br>
        <br></br>
        <i>npx create-react-app my-app</i>
        <br></br>
        <br></br>
        After a bit of time (depending on your PC) the basic React app structure
        will be created. Then you can use these commands to run it (it will also
        be written in the terminal; <b>my-app</b> - is the name you chose
        earlier):
        <br></br>
        <br></br>
        <i>cd my-app</i>
        <br></br>
        <br></br>
        <i>npm start</i>
        <br></br>
        <br></br>
        However, I usually open a new VSCode window and choose the <b>
          my-app
        </b>{" "}
        folder directly. Otherwise, you are one folder up, and every time you
        need to add something new to your app through the terminal, you need to
        make sure that you're in the <b>my-app</b> folder and not in the
        previous folder you chose initially. For me it's just easier to reopen
        the project folder, so my initial path is always the app folder itself.
        E.g., in that case you can run the app with <i>npm start</i> without the
        need to <i>cd my-app</i>.<br></br>
        <br></br>
        Once you start the app, the basic page for Create React App will be
        opened in your browser:<br></br>
        <br></br>
      </p>
      <img src={reactAppImg} alt="Basic Create React App starter page." />
      <p>And your files structure will look like this:</p>
      <img
        src={filesStructureImg01}
        alt="Basic Create React App files structure."
      />
      <p>Starting from bottom to top, I usually do the following next:</p>
      <ul>
        <li>
          <p>
            In the README.md clear everything and put some general information
            about the project. Something like:
          </p>
          <img src={readmeImg} alt="Basic project Readme file." />
          <p>
            You can follow the example of the{" "}
            <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a> format
            that was in the Readme initially or simply google something like
            "basic markdown example".
          </p>
        </li>
        <li>
          <p>
            Then remove everything from the <b>src</b> folder except for{" "}
            <b>App.css</b>, <b>App.js</b>, <b>index.css</b>, <b>index.js</b>.
          </p>
        </li>
        <li>
          <p>
            Remove all the comments and <i>reportWebVitals()</i> from{" "}
            <b>index.js</b>.
          </p>
          <img src={indexJsCodeImg} alt="index.js initial code." />
        </li>
        <li>
          <p>
            Remove everything from <b>index.css</b> (although some may found it
            useful to leave "body - margin: 0" there).
          </p>
        </li>
        <li>
          <p>
            From <b>App.js</b> remove imported logo and all the html-elements
            from the function App. Put some "hello-worldish" element to test
            that it renders properly later.
          </p>
          <img src={appJsCodeImg} alt="App.js initial code." />
        </li>
        <li>
          <p>
            Remove everything from <b>App.css.</b>
          </p>
        </li>
        <li>
          <p>
            In the <b>public</b> folder delete everything except for{" "}
            <b>index.html</b>.
          </p>
        </li>
        <li>
          <p>
            Remove all the comments from <b>index.html</b>, change the title tag
            to what you need it to be, remove all the link-tags.
          </p>
          <img src={indexHtmlCodeImg} alt="index.html initial code." />
        </li>
      </ul>
      <p>
        After this you should see your Hello world page in the browser without
        any errors.<br></br>
        <br></br>
        And the file structure will look like this (as said before, ignore 
        <b>.prettierrc</b> if you don't use it):
      </p>
      <img src={filesStructureImg02} alt="Create React App files structure." />
      <p>
        So far there's one component, <b>App.js</b> which creates "Hello world"
        tag and it's then being rendered in <b>index.js</b>.<br></br>
        <br></br>
        Then in the <b>src</b> folder I create the following main folders for
        the project: <b>assets</b>, <b>components</b>, <b>pages</b>. This is
        subjective, so it can be done differently depending on various
        standards/preferences (+ I won't mention making a <b>utils</b> folder as
        I won't be using any additional utilities for this app).<br></br>
        <br></br>
        <b>Assets</b> stores mostly images, gifs, etc., <b>components</b> is
        used for the smallest elements which are (ta-dam!) components, and in{" "}
        <b>pages</b> you keep you (another ta-dam!) pages which sum up all the
        necessary components in them.<br></br>
        <br></br>I store each component and page in a separate folder as I
        prefer making a separate CSS-file for each one of them. However, if you
        use <a href="https://styled-components.com/">styled components</a>,
        write all the CSS in one file or do whatever else you prefer, you may
        not need separate folders (and probably, you also don't need you{" "}
        <b>App.css</b> file then).<br></br>
        <br></br>
        This app will have only one page, but for the sake of example I'll
        spread all the files into the mentioned folders just to show how it
        usually looks in my case.<br></br>
        <br></br>
        Files structure so far:
      </p>
      <img src={filesStructureImg03} alt="Files structure of the project." />
      <p>
        <b>App.js</b> file:
      </p>
      <img src={appJsImg} alt="App.js file of the project." />
      <p>
        <b>Home.js</b> file:
      </p>
      <img src={homeJsImg} alt="Home.js file of the project." />
      <p>
        <b>Header.js</b> file:
      </p>
      <img src={headerJsImg} alt="Header.js file of the project." />
      <p>
        <b>Main.js</b> file:
      </p>
      <img src={mainJsImg} alt="Main.js file of the project." />
      <p>
        Now, I did some tweaking and basically recreated this article into a
        React-page. Here's one final screenshot of the files structure:
      </p>
      <img src={filesStructureImg04} alt="Final files structure." />
      <p>
        I won't go into details about HTML and CSS used. I just added it the
        simplest way it seemed possible as it wasn't the objective for this one
        (no judgement, ok?). I simply wanted to create and show this same text
        but created with the basic Create React App.<br></br>
        <br></br>
        That's pretty much it about how it looks and works. If you found this
        so-called guide useful, I sincerely thank thee kind person.
      </p>
    </main>
  );
}

export default Main;
