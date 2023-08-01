document.addEventListener("click", () => {
  exinput.focus();
});
const $ = (e) => document.querySelector(e);
var terminal = $("#terminal"),
  currentinput = document.getElementsByClassName("currentinput"),
  exinput = $("#exinput"),
  status = "offline",
  total = $("#total");
function renderBanner() {
  if (localStorage.getItem("last_login"))
    var e = localStorage.getItem("last_login");
  else {
    localStorage.setItem("last_login", new Date());
    var e = localStorage.getItem("last_login");
  }
  localStorage.setItem("last_login", new Date()),
    fetch("https://api.lanyard.rest/v1/users/1017034605708185651")
      .then((e) => e.json())
      .then((e) => {
        e.data.active_on_discord_desktop && (status = "online");
      })
      .catch((e) => {
        status = "offline";
      })
      .then(() => {
        renderOutput(
          `
          @@@@@@@@@@@@@&&&%&,              Last Login : ${e}
       @&@&&@@&@@@@@@@@@@@@&@&@%%                            
     @&%@@&&%@@&&&@@@@@@&@@%(((#%#                          
    @%(%%(##@&((%##((#&(&*///,**,/#        dou@wice                
   %#(#&%%&%#(///**/*//(/(((//**///        ------------------
  %&%**(/*,#**/*(///(%#%%%%###/*/          TITLE   : Frontend Developer, UI/UX Designer
  ####/*/*((/(//(##((((/***/**/            MAIL    : wicedev@hotmail.com
  /*/,/#%//(%#%%%%%%%%(#((##/#             OS      : I use arch btw
    ###(%(%%%%#%%%#######%%%%(             HOBBIES : Everything about vaporwave, video games and absoluetly web development
    *%(*(//*%%%%%#((((#(#%##((             SCHOOL  : YILDIZ TECHNICAL UNIVERSITY
    (#/(/%%%#######(((((#%#%(              STATUS  : ${status}
     #*/((#%#((((////(((***(               AGE     : 20
      ,//(#%###(///***/(#(/                LOCATION: Istanbul, Turkey
        /##%%%%##(/*****((                                   
         %######((##((((((,                                  
         %%####(##(//(######(%%%%%%%(                        
       &&&%%%%#(##(((#%######&&&%&%%                         
  %&&&&&&&&&%%%#(((%%#(####%%%(####                          
 &&&&&&&&&&%%&%%%%&&##%&&%&&%%%(/%         >Welcome to my interactive terminal 
  /@&&&&&&&&&&&&&@&&&&&&&&%%%%%(           >The Project is open-source on GitHub. Type 'repo' to see the repo
     &&&&&&&&&&&&&&&&&&&&&&&(,             >For a list of available commands type 'help'
       ,**/((######(//***,..   
   This is David (Michelangelo)⤴
                              
`,
          1
        );
      });
}
function createCurrentInput() {
  var e = document.createElement("div");
  e.classList.add("currentinput"), terminal.append(e), exinput.focus();
}
function renderOutput(e, M = 20, t = e.length * M + 100) {
  var o,
    n = document.createElement("pre");
  n.classList.add("line");
  n.classList.add("active");
  terminal.append(n);
  for (let s = 0; s < e.length; s++)
    o = setTimeout(() => {
      n.innerHTML += e[s];
      total.scrollTo(0, total.scrollHeight);
    }, s * M);

  document.activeElement.blur(),
    setTimeout(() => {
      createCurrentInput();
      n.classList.remove("active");
    }, t);
}
exinput.focus(),
  window.addEventListener("scroll", () => {
    console.log(document.body.offsetHeight);
  }),
  exinput.addEventListener("input", (e) => {
    currentinput[currentinput.length - 1].innerText = exinput.value;
  }),
  exinput.addEventListener("keypress", (e) => {
    if ("Enter" == e.key && e.target.value) {
      var M = e.target.value;
      switch (M.trim().toLowerCase()) {
        case "listen":
          fetch("https://api.lanyard.rest/v1/users/1017034605708185651")
            .then((e) => e.json())
            .then((e) => {
              console.log(e.data.spotify),
                renderOutput(
                  e.data.listening_to_spotify
                    ? `Now Listening to "${e.data.spotify.song}" by ${e.data.spotify.artist} on Spotify`
                    : "Not Listening to anything on Spotify"
                );
            })
            .catch((e) => {
              renderOutput("Not Listening to anything on Spotify");
            });
          break;
        case "sudo":
          renderOutput("This not a real terminal");
          break;
        case "projects":
          renderOutput(
            `
      name        : Arıyorum
      description : Arıyorum is a blog and news website for ITU Press Student Club
      technologies: [React , NextJS , Vercel , SCSS , Notion API]
      repo        : https://github.com/WiceDev/itu_ariyorum
      -------------------------------------------------------------------------------
      name        : eincode
      description : Community blog about Web Development for Turkish developers to share their knowledge
      technologies: [React , NextJS , TailwindCSS , Vercel , SCSS , Notion API ,Framer Motion, Prism , Mongo Db , Express , NodeJS ]
      repo        : https://github.com/WiceDev/itu_ariyorum
      -------------------------------------------------------------------------------
      name        : Portfolio
      description : My actual portfolio
      technologies: [React , NextJS , Lanyard API ,Redux , Vercel , SCSS , Notion API]
      repo        : https://github.com/WiceDev/itu_ariyorum
          
          
          `,
            1
          );
          break;
        case "help":
          renderOutput(`
     whois    :   Who am I?
     wice     :   Show the banner
     contact  :   List of my all contact links and social media accounts
     projects :   My projects that i currently work on
     listen   :   To see what i am currently listening
     albums   :   My favorite albums
     skills   :   My skills
     `);
          break;
        case "albums":
          renderOutput(`
   MY FAVORITE ALBUMS
   -----------------------------------

  1. Mr.Moralle & Big Steppers by Kendrick Lamar
  2. The Life of Pablo by Kanye West
  3. Man on the Moon II: The Legend of Mr. Rager by Kid Cudi
  4. Rodeo by Travis Scott
   
   -----------------------------------
   I WILL ADD MORE ALBUMS TO HERO SOON!
            `);
          break;
        case "clear":
          (terminal.innerHTML = ""), createCurrentInput();
          break;
        case "cake is a lie":
          renderOutput(
            `
                    .MMM.
                     .OMM
                       MM?
                      ~MMM                              .  ..
                    =MM~MM8                    . :ZMMMMMMMMM:
                   MM8  +MM.       . :OMMMMMMMD+....NMMD.  :MM
                .MM8.    MMO .MMM8,.  .     .. NMMD..  MMMMMMM
         .MMN  'MO       .MM.  ..MMM. .   OMMM . .?MMMMMMMMMMM
    MMD=.  :M.  8.       .,ZM .MMM. .$MMM.... MMMMMMMMMMMMMMMM
    MMMI.. ...  MM.. ....   .$ ..MMMO. ...MMMMMMMMMMMMMMMM7
    MD .MMM8.. ...MMMM...   NMMO .   8MMMMMMMMMMMMMMMM .    IM
    MD     ...ZMMMMMMMMMMMD.. ..~MMMMMMMMMMMMMMMM?.   ..MMMMMM
    MD                    ..MMMMMMMMMMMMMMMMN .  . OMMMMMMMMMM
    MD                   .MMMMMMMMMMMMMM8  .  .NMMMMMMMMMMMMMM
    MD                   .MMMMMMMMMM. .   +MMMMMMMMMMMMMMMM~..
    MD                   .MMMMMI.  .. MMMMMMMMMMMMMMMM8 ...,MM
    MD                   .M.. .  ?MMMMMMMMMMMMMMMM.....DMMMMMM
    MD                       $MMMMMMMMMMMMMMMM.. . MMMMMMMMMMM
    MD                   .MMMMMMMMMMMMMMMI. ..7MMMMMMMMMMMMMMM
    MD                   .MMMMMMMMMMM   . MMMMMMMMMMMMMMMM
    MD                   .MMMMMM~ .  $MMMMMMMMMMMMMMMM
    MD                   .MM,. ..8MMMMMMMMMMMMMMMM
    MD                    ..:MMMMMMMMMMMMMMMM?
    MM                   .MMMMMMMMMMMMMMN
     MM                  .MMMMMMMMMM
      .MMM=..            .MMMMMM
          '77MMMMMMMMMMMMMM7
`,
            2
          );
          break;
        case "wice":
          renderBanner();
          break;
        case "arch":
          renderOutput(
            `
                  .o+ 
                  ooo/
                 +oooo:
                 
                +oooooo:
               -+oooooo+:
              /:-:++oooo+:
             /++++/+++++++:
            /++++++++++++++:
           /+++ooooooooooooo/ 
         ./ooosssso++osssssso+ 
        .oossssso- /ossssss+ 
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
    /ossssso+/:-        -:/+osssso+-
   +sso+:-                   .-/+oso:
  ++:.                            -/+/
           I use arch btw
            just kidding
                   `,
            1
          );
          break;
        case "still alive":
          renderOutput(`
    This was a triumph.
    I'm making a note here:
    huge success.
    It's hard to overstate
    My satisfaction.
    Aperture Science.
    We do what we must
    Because we can.
    For the good of all of us.n 
    Except the ones who are dead.

    But there's no sense crying
    Over every mistake.
    You just keep on trying
    Till you run out of cake.
    And the Science gets done.
    And you make a neat gun.
    For the people who are
    Still alive.

    I'm not even angry.
    I'm being so sincere right now.
    Even though you broke my heart.
    And killed me.
    And tore me to pieces.
    And threw every piece into a fire.
    As they burned it hurt because
    I was so happy for you!
    Now these points of data
    Make a beautiful line.
    And we're out of beta.
    We're releasing on time.
    So I'm glad. I got burned.
    Think of all the things we learned
    For the people who are
    Still alive.

    Go ahead and leave me.
    I think I prefer to stay inside.
    Maybe you'll find someone else
    To help you.
    Maybe Black Mesa...
    THAT WAS A JOKE, HA HA, FAT CHANCE.
    Anyway this cake is great
    It's so delicious and moist
    Look at me still talking when there's science to do
    When I look out there
    It makes me GLaD I'm not you
    I've experiments to run
    There is research to be done
    On the people who are
    Still alive.

    And believe me I am still alive
    I'm doing science and I'm still alive
    I feel FANTASTIC and I'm still alive
    While you're dying I'll be still alive
    And when you're dead I will be still alive
    Still alive
    Still alive.

`);
          break;
        case "whoami":
          renderOutput(
            'I dont know but you can tell me who you are by mail. Type "email"'
          );
          break;
        case "whois":
          renderOutput(`
          I use Arch btw
          never mind
          Who Am I ?
          Hi there, my name is Doğu, I am from Turkey and
          I'm a Self Taught Frontend Developer with experience designing, 
          developing and implementing applications and solutions using a range of technologies and programming languages.
          I am currently working on my portfolio and some other projects.
          Passionate about learning and development with a desire to apply skills on a larger development projects. Eager to tackle more complex 
          problems and continue to find ways to maximize user effiecency.

         `);
          break;
        case "contact":
          renderOutput(`Contact
  Type any of these commands to redirect related site

    |Github 
    |Twitter
    |LinkedIn
    |Email
 `);
          break;
        case "date":
          renderOutput(new Date().toLocaleString());
          break;
        case "repo":
          renderOutput(
            "Opening to https://github.com/WiceDev/wice-terminal",
            10,
            2e3
          ),
            setTimeout(() => {
              window.open("https://github.com/WiceDev/wice-terminal");
            }, 2e3);
          break;
        case "linkedin":
          renderOutput(
            "Opening to https://www.linkedin.com/in/do%C4%9Fuhan-%C3%B6zy%C4%B1lmaz-419400259/",
            10,
            2e3
          ),
            setTimeout(() => {
              window.open(
                "https://www.linkedin.com/in/do%C4%9Fuhan-%C3%B6zy%C4%B1lmaz-419400259/"
              );
            }, 2e3);
          break;
        case "email":
          renderOutput("Opening to mail", 10, 2e3),
            setTimeout(() => {
              window.open("mailto:wicedev@hotmail.com");
            }, 2e3);
          break;
        case "github":
          renderOutput("Opening to https://github.com/WiceDev", 10, 2e3),
            setTimeout(() => {
              window.open(
                "https://www.w3schools.com/jsref/met_win_scrollto.asp"
              );
            }, 2e3);
          break;
        case "twitter":
          renderOutput("Opening to https://twitter.com/wicedev", 10, 2e3),
            setTimeout(() => {
              window.open("https://twitter.com/wicedev");
            }, 2e3);
          break;
        case "skills":
          renderOutput(`Skills

  Technologies and Tools that i use
  
    |React.js React Router Redux  Next.js
    |Vue.js Nuxt.js
    |Node.js Express.js
    |CSS, SASS, SCSS , Bootstrap , Tailwind , Material UI , Styled Components , Emotion , Chakra UI 
    |MongoDB , Firebase,
 `);
          break;
        default:
          renderOutput(`Command "${M}" not found`);
      }
      exinput.value = "";
    }
  }),
  renderBanner();
