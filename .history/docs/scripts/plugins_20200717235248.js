export function edit (hook, vm) {
      hook.beforeEach(function(html) {
        var url =
          'https://github.com/ModernJavaScriptDevelopment/ModernJavaScriptDevelopment/tree/master/docs/' +
          vm.route.file;
        var editHtml = '[Edit on *GitHub*](' + url + ')\n';

        return (
          editHtml +
          html +
          '\n----\n' +
          'Last modified  {docsify-updated}  ' +
          editHtml
        );
      });
    }

const x = 10

window.$docsify.plugins = [].concat((t,e)=>{
    var o, n = ()=>{
        document.documentElement.classList.add("transition"),
        window.setTimeout(()=>{
            document.documentElement.classList.remove("transition")
        }
        , 800)
    }
    , c = ({background: t, toggleBtnBg: e, textColor: o})=>{
        document.documentElement.style.setProperty("--docsify_dark_mode_bg", t),
        document.documentElement.style.setProperty("--docsify_dark_mode_btn", e),
        document.documentElement.style.setProperty("--text_color", o)
    }
    ;
    o = {
        dark: {
            background: "#1c2022",
            toggleBtnBg: "#34495e",
            textColor: "#b4b4b4"
        },
        light: {
            background: "white",
            toggleBtnBg: "var(--theme-color)",
            textColor: "var(--theme-color)"
        },
        ...e.config.darkMode
    },
    t.afterEach((function(t, e) {
        e(t = ` <div id="dark_mode">\n             <input class="container_toggle" type="checkbox" id="switch" name="mode" />\n             <label for="switch">Toggle</label>\n           </div>${t}`)
    }
    )),
    t.doneEach((function() {
        var t;
        localStorage.getItem("DOCSIFY_DARK_MODE") ? (t = localStorage.getItem("DOCSIFY_DARK_MODE"),
        c(o[`${t}`])) : (t = "light",
        c(o.light)),
        document.querySelector("input[name=mode]").addEventListener("change", (function() {
            "light" === t ? (n(),
            c(o.dark),
            localStorage.setItem("DOCSIFY_DARK_MODE", "dark"),
            t = "dark") : (n(),
            c(o.light),
            localStorage.setItem("DOCSIFY_DARK_MODE", "light"),
            t = "light")
        }
        ))
    }
    ))
}
, window.$docsify.plugins);
