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
        To simplify things I use Create React App and my code editor is VSCode.
        <br></br>
        <br></br>
        Note: I also use Prettier to make the code look more or less "in-shape",
        but that's not really necessary, so I won't go through the details about
        it. In my code it just adds identical tab widths of 2, semicolons and
        double quotes. Otherwise, if seen on the further screenshots, the
        file .prettierrc can be ignored.<br></br>
        <br></br>
        When you start a new app it will be created within a new folder
        automatically, so, if you already created one and choose it as initial,
        you should know that your app will be there in a separate folder. Unless
        you want this, make sure to choose a folder you need. Otherwise you will
        have a folder within a folder.<br></br>
        <br></br>
        Once the directory is chosen, open the terminal and use the following
        command (make sure to replace the my-app part with the name of your
        project or how you would like your project folder to be called, because
        this is going to be its name; use "kebab-case-format" for it):<br></br>
        <br></br>
        npx create-react-app my-app<br></br>
        <br></br>
        After a bit of time (depending on your PC) the basic React app structure
        will be created. Then you can use these commands to run it (it will also
        be written in the terminal; my-app - is the name you chose earlier):
        <br></br>
        <br></br>
        cd my-app<br></br>
        <br></br>
        npm start<br></br>
        <br></br>
        However, I usually open a new VSCode window and choose the my-app folder
        directly. Otherwise, you are one folder up, and every time you need to
        add something new to your app through the terminal, you need to make
        sure that you're in the my-app folder and not in the previous folder you
        chose initially. For me it's just easier to reopen the project folder,
        so my initial path is always the app folder itself. E.g., in that case
        you can run the app with npm start without the need to cd my-app.
        <br></br>
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
            You can follow the example of the Markdown format that was in the
            Readme initially or simply google something like "basic markdown
            example".
          </p>
        </li>
        <li>
          <p>
            Then remove everything from the src folder except for App.css,
            App.js, index.css, index.js.
          </p>
        </li>
        <li>
          <p>Remove all the comments and reportWebVitals() from index.js.</p>
          <img src={indexJsCodeImg} alt="index.js initial code." />
        </li>
        <li>
          <p>
            Remove everything from index.css (although some may found it useful
            to leave "body - margin: 0" there).
          </p>
        </li>
        <li>
          <p>
            From App.js remove imported logo and all the html-elements from the
            function App. Put some "hello-worldish" element to test that it
            renders properly later.
          </p>
          <img src={appJsCodeImg} alt="App.js initial code." />
        </li>
        <li>
          <p>Remove everything from App.css.</p>
        </li>
        <li>
          <p>In the public folder delete everything except for index.html.</p>
        </li>
        <li>
          <p>
            Remove all the comments from index.html, change the title tag to
            what you need it to be, remove all the link-tags.
          </p>
          <img src={indexHtmlCodeImg} alt="index.html initial code." />
        </li>
      </ul>
      <p>
        After this you should see your Hello world page in the browser without
        any errors.<br></br>
        <br></br>
        And the file structure will look like this (as said before,
        ignore .prettierrc if you don't use it):
      </p>
      <img src={filesStructureImg02} alt="Create React App files structure." />
      <p>
        So far there's one component, App.js which creates "Hello world" tag and
        it's then being rendered in index.js.<br></br>
        <br></br>
        Then in the src folder I create the following main folders for the
        project: assets, components, pages. This is subjective, so it can be
        done differently depending on various standards/preferences (+ I won't
        mention making a utils folder as I won't be using any additional
        utilities for this app).<br></br>
        <br></br>
        Assets stores mostly images, gifs, etc., components is used for the
        smallest elements which are (ta-dam!) components, and in pages you keep
        you (another ta-dam!) pages which sum up all the necessary components in
        them.<br></br>
        <br></br>I store each component and page in a separate folder as I
        prefer making a separate CSS-file for each one of them. However, if you
        use styled components, write all the CSS in one file or do whatever else
        you prefer, you may not need separate folders (and probably, you also
        don't need you App.css file then).<br></br>
        <br></br>
        This app will have only one page, but for the sake of example I'll
        spread all the files into the mentioned folders just to show how it
        usually looks in my case.<br></br>
        <br></br>
        Files structure so far:
      </p>
      <img src={filesStructureImg03} alt="Files structure of the project." />
      <p>App.js file:</p>
      <img src={appJsImg} alt="App.js file of the project." />
      <p>Home.js file:</p>
      <img src={homeJsImg} alt="Home.js file of the project." />
      <p>Header.js file:</p>
      <img src={headerJsImg} alt="Header.js file of the project." />
      <p>Main.js file:</p>
      <img src={mainJsImg} alt="Main.js file of the project." />
    </main>
  );
}

export default Main;
