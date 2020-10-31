// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    visor: {
      hotkey: 'CommandOrControl+Shift+H',
      // position: 'top', // or left, right, bottom
      // width: 200, // Optional, defaults to half of viewable area for horizontal positions, 100% for vertical
      // height: 900, // Optional, defaults to half of viewable area for vertical positions, 100% for horizontal
    },

    hyperBorder: {
      // animate: {
      //   duration: '10000'
      // },
      borderColors: ['#007700', '#66FF66'],
      borderWidth: '1.5px',
      borderRadiusOuter: '5px',
      adminBorderColors: ['#770000', '#FF0000'],
      blurredColors: ['#000000', '#006600'],
      blurredAdminColors: ['#000000', '#660000'],
    },

    hyperline: {
      fontSize: '12px',
      plugins: [
        "hostname",
        "ip",
        "cpu",
        "memory",
        "battery",
        "network",
        // "spotify"                                                                
      ]
    },

    // opacity: 0.95,
    opacity: {
      focus: .95,
      blur: 0.7
    },

    // default font size in pixels for all tabs
    fontSize: 13,

    // font family with optional fallbacks
    fontFamily:
      '"FiraCode NF Retina", "CaskaydiaCove NF", "JetBrains Mono"',//ligatures ok
    //, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // '"FiraCode NF Retina"',// "Hack"',//, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // '"Cascadia Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // '"CaskaydiaCove NF"',
    // '"JetBrains Mono", "CaskaydiaCove NF", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    // '"CaskaydiaCove NF", "JetBrains Mono", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 0,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(0,255,0,0.8)',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#f00',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: '#ccc',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#000',

    // terminal selection color
    selectionColor: 'rgba(100,200,100,0.3)',

    // border color (window, tabs)
    // borderColor: '#030',

    // custom CSS to embed in the main window
    css: '.line { font: bold 12px Monospace; }',// hyperline font size

    // custom CSS to embed in the terminal window
    termCSS: '',

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#C51E14',
      green: '#090',
      yellow: '#C7C329',
      blue: '#0A2FC4',
      magenta: '#C839C5',
      cyan: '#20C5C6',
      white: '#C7C7C7',
      lightBlack: '#686868',
      lightRed: '#FF1155',
      lightGreen: '#5F5',
      lightYellow: '#FFFA72',
      lightBlue: '#6A76FB',
      lightMagenta: '#FD7CFC',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF',
    },

    verminal: {
      fontFamily:
        // '"JetBrains Mono Semi Light", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
        '"Fira Code Regular", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
      fontSize: 13.5,
    },

    StarWarsTheme: {
      character: 'random', // Define your favorite star wars character
      // lightsaber: 'true', // Activate your theme's lightsaber mode
      unibody: 'false', // Define the color of the Hyper window header
      avatar: 'true'  // Activate your theme's background avatar
    },

    // backgroundImage: {
    //   folder: 'C:/Users/mcale/OneDrive/Pictures/wallpapers',
    //   colorOpacity: .5
    // },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    // shell: 'C:\\Windows\\System32\\bash.exe',
    shell: 'C:\\Program Files\\WindowsApps\\CanonicalGroupLimited.UbuntuonWindows_2004.2020.812.0_x64__79rhkp1fndgsc\\ubuntu.exe',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['run'],
    // , '--login', '-i'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: true,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: 'vertical',

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: false,//false for font-ligatures

    // 'hyperterm-dibdabs': {
    //   overrides: {
    //     '/mnt/c/Users/mcale/Music': '#123',
    //   }
    // },

    hyperTabs: {
      // trafficButtons: true,
      tabIconsColored: true,
      border: true,
      closeAlign: 'right',
    },

    //pokemon
    pokemon: 'random', // Choose your favorite pokemon theme
    unibody: 'false', // Choose the color of the window header
    poketab: 'true', // Deactivate your theme's poketab
    //pokemon

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `@company/project`
  //   `project#1.0.1`
  // "hyper-simple-vibrancy",
  // "hyper-background-image",
  // "hyper-folder-icon",
  plugins: [
    // "verminal",
    "hyperterm-visor",
    // "hyperborder",
    "hyperline",
    // "hyper-tabs-enhanced",
    "hyperterm-dibdabs",
    "hyper-opacity",
    // "hyperpower", 
    // "hyper-pokemon",
    "hyper-star-wars",
    "hyper-font-ligatures",
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    'window:devtools': 'cmd+alt+o',
  },
};
