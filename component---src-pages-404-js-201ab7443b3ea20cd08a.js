(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,A,a){"use strict";a.r(A);var n=a(0),t=a.n(n),r=a(154);A.default=function(){return t.a.createElement(r.a,null,t.a.createElement("h1",null,"NOT FOUND"),t.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},142:function(e,A,a){"use strict";a.r(A),a.d(A,"graphql",function(){return f}),a.d(A,"StaticQueryContext",function(){return u}),a.d(A,"StaticQuery",function(){return m});var n=a(0),t=a.n(n),r=a(4),i=a.n(r),l=a(141),c=a.n(l);a.d(A,"Link",function(){return c.a}),a.d(A,"withPrefix",function(){return l.withPrefix}),a.d(A,"navigate",function(){return l.navigate}),a.d(A,"push",function(){return l.push}),a.d(A,"replace",function(){return l.replace}),a.d(A,"navigateTo",function(){return l.navigateTo});var o=a(144),s=a.n(o);a.d(A,"PageRenderer",function(){return s.a});var d=a(34);a.d(A,"parsePath",function(){return d.a});var u=t.a.createContext({}),m=function(e){return t.a.createElement(u.Consumer,null,function(A){return e.data||A[e.query]&&A[e.query].data?(e.render||e.children)(e.data?e.data.data:A[e.query].data):t.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,A,a){e.exports={container:"header-module--container--1W6-M",header:"header-module--header--2xk8H",headerImage:"header-module--headerImage--1SOZa",headerOverlay:"header-module--headerOverlay--L_adN",headerTop:"header-module--headerTop--1piM7",logoContainer:"header-module--logoContainer--EnKa-",logo:"header-module--logo--37MTc",navigation:"header-module--navigation--10vHb",teaser:"header-module--teaser--3wiAv",teaserButton:"header-module--teaserButton--uI9XR",teaserContentWrap:"header-module--teaserContentWrap--RZBub"}},144:function(e,A,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Unikka - IHR PARTNER FÜR DIGITALE LÖSUNGEN",menuLinks:[{name:"Home",link:"/"},{name:"Blog",link:"/blog"},{name:"Contact",link:"/contact"},{name:"Impressum",link:"/impressum"}]}}}}},146:function(e,A,a){"use strict";a.r(A);a(35);var n=a(0),t=a.n(n),r=a(4),i=a.n(r),l=a(49),c=a(2),o=function(e){var A=e.location,a=c.default.getResourcesForPathnameSync(A.pathname);return t.a.createElement(l.a,Object.assign({location:A,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},A.default=o},147:function(e,A,a){var n=a(0);function t(e){return n.createElement("svg",e,[n.createElement("path",{fill:"#89c53f",fillRule:"nonzero",d:"M487.368 30.194C474.48 16.419 450.588-.002 409.963-.002h-96.496c-62.445 0-85.112 50.9-85.112 85.112v254.184c0 13.979-5.509 19.046-11.459 22.442-6.679 3.812-14.725 5.179-17.375 5.416h-95.52c-13.271 0-22.867-2.979-28.513-8.854-7.62-7.925-8.946-21.42-8.82-26.342l.058-.529V33.331c0-18.412-14.921-33.333-33.334-33.333C14.984-.002.06 14.918.06 33.33v295.763c-.338 8.67-.104 46.054 26.537 74.529 12.888 13.775 36.78 30.196 77.405 30.196h97.137l.638-.025c37.483-1.442 93.246-27.8 93.246-94.5V85.469c.22-6.221.82-18.805 18.445-18.805h96.496c13.271 0 22.867 2.98 28.513 8.855 7.617 7.925 8.942 21.42 8.817 26.341l-.059 298.626c0 18.412 14.925 33.333 33.334 33.333 18.412 0 33.333-14.92 33.333-33.333V104.723c.342-8.675.108-46.054-26.533-74.53",key:0}),n.createElement("path",{fill:"#fff",fillRule:"nonzero",d:"M636.163 98.969h17.309v135.583c0 13.7 1.083 26.32 3.246 37.858 2.162 11.542 6.066 21.521 11.72 29.934 5.646 8.416 13.28 14.962 22.896 19.65 9.613 4.687 21.871 7.029 36.78 7.029 14.904 0 27.162-2.342 36.779-7.03 9.612-4.687 17.246-11.233 22.9-19.65 5.646-8.412 9.554-18.39 11.716-29.933 2.167-11.537 3.246-24.158 3.246-37.858V98.97h17.309v144.596c0 14.187-1.505 27.466-4.509 39.845-3.008 12.384-8.054 23.138-15.146 32.271-7.091 9.142-16.529 16.354-28.304 21.638-11.779 5.283-26.446 7.933-43.991 7.933-17.55 0-32.217-2.65-43.992-7.933-11.78-5.284-21.221-12.496-28.304-21.638-7.096-9.133-12.142-19.887-15.146-32.27-3.009-12.38-4.509-25.659-4.509-39.846V98.969zM880.28 98.969h18.03l154.333 214.55V98.969h16.946V339.48h-18.025L897.226 127.814v211.667H880.28V98.97z",key:1}),n.createElement("path",{fill:"#fff",d:"M1156.61 98.969h17.308V339.48h-17.308z",key:2}),n.createElement("path",{fill:"#fff",fillRule:"nonzero",d:"M1260.935 98.969h17.308v125.487L1396.514 98.97h21.28l-90.872 97 103.13 143.512h-20.555l-95.195-130.533-36.059 38.583v91.95h-17.308V98.97zM1468.268 98.969h17.309v125.487L1603.856 98.97h21.27l-90.866 97 103.125 143.512h-20.55l-95.196-130.533-36.062 38.583v91.95h-17.309V98.97zM1808.306 245.731l-50.12-124.762-50.126 124.762h100.246zM1750.248 98.97h17.312l98.442 240.512h-19.833l-31.371-77.525h-113.225l-31.013 77.525h-18.754l98.442-240.512z",key:3})])}t.defaultProps={fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414",clipRule:"evenodd",viewBox:"0 0 1867 434"},e.exports=t,t.default=t},148:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUBA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGVRn7BxL//xAAaEAACAgMAAAAAAAAAAAAAAAACEgADARAR/9oACAEBAAEFAhJZi8DhcauxIZtr/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgMAAwAAAAAAAAAAAAAAAREAECExQWH/2gAIAQEABj8Cac3K4YPUGADwV//EABwQAAICAgMAAAAAAAAAAAAAAAERADEQIUFRgf/aAAgBAQABPyF0aEBEXcKvYLFDOEuFEk67B//aAAwDAQACAAMAAAAQjy//xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQMBAT8Quq//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxCI/8QAHRABAAICAgMAAAAAAAAAAAAAAQARMYEhQWFxkf/aAAgBAQABPxB38Xxq4ci1QjWh52RqYxRuN4LFyvUQ+uWWPVemf//Z",aspectRatio:1.5001382361072713,src:"/static/727bb02c0e79a082aba335852a651cfb/402b9/header_image.jpg",srcSet:"/static/727bb02c0e79a082aba335852a651cfb/d771b/header_image.jpg 240w,\n/static/727bb02c0e79a082aba335852a651cfb/b8ea9/header_image.jpg 480w,\n/static/727bb02c0e79a082aba335852a651cfb/402b9/header_image.jpg 960w,\n/static/727bb02c0e79a082aba335852a651cfb/c0615/header_image.jpg 1440w,\n/static/727bb02c0e79a082aba335852a651cfb/9ddb4/header_image.jpg 1920w,\n/static/727bb02c0e79a082aba335852a651cfb/5bb85/header_image.jpg 2880w,\n/static/727bb02c0e79a082aba335852a651cfb/f686b/header_image.jpg 5426w",sizes:"(max-width: 960px) 100vw, 960px"}}}}}},149:function(e,A,a){e.exports={contentSection:"content-module--contentSection--1Pzmb"}},150:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABdGlDQ1BpY2MAACiRdZHPK8NhHMdfNiKbKA4ODkvjZJqpxUXZ0qilNVOGy/b13ab249v3O0muynVFiYtfB/4CrspZKSIlBydn4oK+Pl9bbcmep8/n83rez/P59DyfB2yxrJIzGr2Qyxf1aCjgmovPu5qfceAU8+JNKIY2HomEqTs+7miw4o3HqlX/3L/DsaQaCjS0CI8pml4UnhQOrxY1i7eFu5RMYkn4VHhAlwsK31p6sswvFqfL/GWxHosGwdYh7ErXcLKGlYyeE5aX485lV5TKfayXONX87IzEXrEeDKKECOBiigmC+BliVLwfDz4GZUWdfO9v/jQFyVXEa6yhs0yaDEUGRF2R6qrElOiqzCxrVv//9tVIDfvK1Z0BaHoyzbc+aN6C75Jpfh6a5vcR2B/hIl/NLxzAyLvoparm3of2DTi7rGrJHTjfhO4HLaEnfiW7mC2VgtcTaItD5zW0LpR7Vtnn+B5i6/JVV7C7B/1yvn3xB4zIZ/eeHYn0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAC6UExURYnFP4jEPYnFPofEPI3HRp7PYZDJS4jFPo7HR6PSaqTSao/ISb7flfj89M3mrYvGQYjFPZrNWtrtwvb78fn89uHwz6nVcorFQNXru////+Ty1I/ISIzGQ9Tque/35Z7PYNbrvOXy1JjMV/H46NzuxrTahLTahcnlqPr998PhnZzPX/X677zek4XDOIbEO5DISuj02p3PX73ek73fk4nFQIbDOZ3PYLzektLptv7+/f3+/LHYf5TLUp/QY3VjoxgAAAABYktHRBnsbrWIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gsVFi0t+hFfzQAAANtJREFUOMvdktkOgjAQRSml1uKCioKjouKCKIr7rv//WxYBBdOY+Kbep5npySS9cyXpn4TkqJAR5nq0sRSSCUc0SxhTGcmh1DvNF4paUJTKFb3KpdeM1A6zDo1mMGlZEKndSe4wu2AHQKnXh8HQcYYjF8YiAE08mM4w9ucLsCQRsPRghflXmg3omm8B+5cB7sNaBGwsWMx9jLc7HfYiAI3BHXGLncPxdBYCnXZ8JPtCQyfrSUCSjdr9zF7lSoNeKxbyNJ2oHGGqypZKeEM5Q5SXTEVRe7afx/aLdQM+rB6YIlNq6wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0yMVQyMjo0NTo0NSswMTowMLLnTJ8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMjFUMjI6NDU6NDUrMDE6MDDDuvQjAAAAJnRFWHRpY2M6Y29weXJpZ2h0AE5vIGNvcHlyaWdodCwgdXNlIGZyZWVseaea8IIAAAAhdEVYdGljYzpkZXNjcmlwdGlvbgBzUkdCIElFQzYxOTY2LTIuMVet2kcAAAAidEVYdGljYzptYW51ZmFjdHVyZXIAc1JHQiBJRUM2MTk2Ni0yLjFrnBT5AAAAG3RFWHRpY2M6bW9kZWwAc1JHQiBJRUM2MTk2Ni0yLjGFZP48AAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"},151:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABdGlDQ1BpY2MAACiRdZHPK8NhHMdfNiKbKA4ODkvjZJqpxUXZ0qilNVOGy/b13ab249v3O0muynVFiYtfB/4CrspZKSIlBydn4oK+Pl9bbcmep8/n83rez/P59DyfB2yxrJIzGr2Qyxf1aCjgmovPu5qfceAU8+JNKIY2HomEqTs+7miw4o3HqlX/3L/DsaQaCjS0CI8pml4UnhQOrxY1i7eFu5RMYkn4VHhAlwsK31p6sswvFqfL/GWxHosGwdYh7ErXcLKGlYyeE5aX485lV5TKfayXONX87IzEXrEeDKKECOBiigmC+BliVLwfDz4GZUWdfO9v/jQFyVXEa6yhs0yaDEUGRF2R6qrElOiqzCxrVv//9tVIDfvK1Z0BaHoyzbc+aN6C75Jpfh6a5vcR2B/hIl/NLxzAyLvoparm3of2DTi7rGrJHTjfhO4HLaEnfiW7mC2VgtcTaItD5zW0LpR7Vtnn+B5i6/JVV7C7B/1yvn3xB4zIZ/eeHYn0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAACHUExURYnFP4jFPonFPojEPZTKUI7IR5XLU53PYJbLVInFQI3HRdjswLTahYfEPKXTber03PH46PH45+z24bLZgY/ISObz1r3flMfjo6bTb6TSatPquODwzcrlqdvtxYXDObzektzuxovGQobEOsnlp6TSa6XTbNvuxdfrvorFQOr13avWd5XLUv///8LvYRwAAAABYktHRCy63XGrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gsVFi0t+hFfzQAAAHpJREFUGNONjkkOgzAQBMcewGAwuwlh30ng//8LiQU+RaIPPerSHArgTgj9FiI5gWEeZTFmO2pz1xPoB2EUJ78fmspM4EPmz6LkGlQ1NK1MqQZdL7L/oG2GUQPgZTHNy/q6AEniKHxvKDyXKxHHZmw/rmlc7kqbEriTDz+RCFYlv0lpAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTExLTIxVDIyOjQ1OjQ1KzAxOjAwsudMnwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMS0yMVQyMjo0NTo0NSswMTowMMO69CMAAAAmdEVYdGljYzpjb3B5cmlnaHQATm8gY29weXJpZ2h0LCB1c2UgZnJlZWx5p5rwggAAACF0RVh0aWNjOmRlc2NyaXB0aW9uAHNSR0IgSUVDNjE5NjYtMi4xV63aRwAAACJ0RVh0aWNjOm1hbnVmYWN0dXJlcgBzUkdCIElFQzYxOTY2LTIuMWucFPkAAAAbdEVYdGljYzptb2RlbABzUkdCIElFQzYxOTY2LTIuMYVk/jwAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="},152:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABdGlDQ1BpY2MAACiRdZHPK8NhHMdfNiKbKA4ODkvjZJqpxUXZ0qilNVOGy/b13ab249v3O0muynVFiYtfB/4CrspZKSIlBydn4oK+Pl9bbcmep8/n83rez/P59DyfB2yxrJIzGr2Qyxf1aCjgmovPu5qfceAU8+JNKIY2HomEqTs+7miw4o3HqlX/3L/DsaQaCjS0CI8pml4UnhQOrxY1i7eFu5RMYkn4VHhAlwsK31p6sswvFqfL/GWxHosGwdYh7ErXcLKGlYyeE5aX485lV5TKfayXONX87IzEXrEeDKKECOBiigmC+BliVLwfDz4GZUWdfO9v/jQFyVXEa6yhs0yaDEUGRF2R6qrElOiqzCxrVv//9tVIDfvK1Z0BaHoyzbc+aN6C75Jpfh6a5vcR2B/hIl/NLxzAyLvoparm3of2DTi7rGrJHTjfhO4HLaEnfiW7mC2VgtcTaItD5zW0LpR7Vtnn+B5i6/JVV7C7B/1yvn3xB4zIZ/eeHYn0AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAIiUExURYnFP4nFPojFPojEPY7IR5LJTpDISorGQYfEPInFQI3HRpDJS5LKTpPKUJPKT5HJTI/ISYzHRKXTbMvlquLx0Or13Oby1tTquLHZgKjUccDgmdLptuDwzebz1+r13ez24ez13+j02eTy097vydDossDgmKzWeJjMV4vGQ8jkpff78f////z9+tvtxJzOXp/QY8bjo+n03Pr99/D35tjswLTahpXLU47HR8/nsf7+/eXy1ZrNW5bMVfP57P3+/Ov135bLVLfcivz++tPquObz1v///v7//en024zGQ5LJTfj786XTbYfEPbHZgfP56/r898vmq6bTbvn89sPhna/YfvX67/7//trtwrTahdPpt4rFQKPSafD459zuxpTLUojFPbrdj9nswYvGQt/vy47ISNnswr7flf3++73flJjNWO324fH46J7PYr7fltHotff78vn89c3nrvz9+fr9+Pz+++/35ZnNWNbrvbndjanVc6bTb6vWdsnkp7LZgt7vypTKUYfEO7jci/L46c/osbDYf67XeqDQZJvOXPT67fT67qrVdKfTb5XLUo3HReDwzLbbibncjdnswLfbiZ7PYfb78PL56pnNWafUb6jUcvv9+O/35Mbjoq7Xe93ux+735MzmrMfkpfL565vOXdfrvfv9+a7XfNHotN3uyMfkpNrtw+Hwzvr89ujz2ev13u/35rbbiPb78b/gmOTy0ozGRMrlqo/ISFIKYQ8AAAABYktHRCskueQIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gsVFi0t+hFfzQAABCpJREFUeNrt3PlbE0ccx/HdHZIMRSQoYsSrIkhgA1UENMGGiDaK4RC1AbEYwftERTxQK171tta29vS+j3r7/4lPn9aduGZn1lljfD7vn3e/+2KzbOB5dlZREEIIIYQQQgghhBBCCCGEEEIIfeqpmmp/V/NsD+SMqFkut4cKH0ajNPuLnBG5Jo3M8+YrlGpOkTXPqNEFYwrH+rxE7EfVcscVjZ8wcdJkk76cUjy1pHRamd8Zt5ZTXqG/KVBZJaDWlK+mz6jWUxeYWVNbp8lnq7NmB/87RqieW03mlH+t8xRuKIqIfYI8R5/b+PYI8/J5z/O4+d9wmYeLLvAtlHuytaaQYf6iWDPfbi2tvOQ3tS12ST3ZtH2JcfxSruHasm9FzLoe75gjU00748bpy7s49iErvhMzD9e9MiERvYqZ3dPLcZ6bVgubh0/HGnnfNknotTzodUEb6PUb0olObNxkw6zrm7dIu6zF0WSrLbOub/OnDa3mFNtE9/HeT+WjaWy7TbS+Iztd6ObSJEp8Z5tJ/bui76AHdku67QmjPXuYHaIFe/fFTBrc33mgMMCiwwdpetCqez6zw/eHhuh7SuQdPsKqj8oxC6O1yABz8o4NpdiWHK9gpofccu7VomhSz/yp1PdDyptvVwkzvfWEnFu1MLrqpHH7U6kZ9DTzb0L/GTkX9QeiT6ZGa2eZb8+gLxPQyrnzzPgfMwLdu5YZfyEz0DXM+FVAAw000EADDTTQQAMN9OeO/glooD8zdA/QQAMNNNBAAw000EADDTTQQAMNNNBAf4LoC8zUjsxAX2Smnj+XEWgf8zD0prMWSw7Iz78Yt//1UlrQv/Ubp1afthhLf//DuP2fkdQ/pDNocoJdR1FisSiA/MVsPsOVDrTqDjFjK/4mKRgaHWQfH71ssTDGGbSiHGXG6kcO5yXe98grabp4hd36qsWvQNIjbrLQ9GCYdQQKD9TuHzR5urjdd21iI7ttsNNC4RA6sXtATy66q9/kOe7q8DsbXr9h8cSrQ2gle4duu5sLLYY7hW6O9dk137pthXAKrfjv2EXf9Vo9xO0YmmzZbM/cZ/VN5CBaUTest2OO3/NYjnYQnbXcDvp+k/XSSKe+XIZLrOwWNz8o43jAv4s5HXGr27pQJNIRFyPHuy/xLEogS407LWmXiVaIa/FDEXPb1VyuhRTNsUWGvUIcF5RImt+3IMpLjj9q8XMePn/e290a58pf1hwpagjzkMP/lNbxL9Wu//+vyODsWfJfNaBpdbU1jwMW4tbKJ5GEwKdMqir/Hfm0PMeZxfrUXzbtWcnU51MazF4VMKm4p7zlxgvBFwUQr29s4ZiCl6M8zr0YgVIl/1XeSLOXMozw9hIqflmq1ON2ZanSr+fkw8h++8UHvIkDIYQQQgghhBBCCCGEEEIIIYTQR+s14ioiE01kKboAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMjFUMjI6NDU6NDUrMDE6MDCy50yfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTIxVDIyOjQ1OjQ1KzAxOjAww7r0IwAAACZ0RVh0aWNjOmNvcHlyaWdodABObyBjb3B5cmlnaHQsIHVzZSBmcmVlbHmnmvCCAAAAIXRFWHRpY2M6ZGVzY3JpcHRpb24Ac1JHQiBJRUM2MTk2Ni0yLjFXrdpHAAAAInRFWHRpY2M6bWFudWZhY3R1cmVyAHNSR0IgSUVDNjE5NjYtMi4xa5wU+QAAABt0RVh0aWNjOm1vZGVsAHNSR0IgSUVDNjE5NjYtMi4xhWT+PAAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="},153:function(e,A,a){},154:function(e,A,a){"use strict";var n=a(145),t=a(0),r=a.n(t),i=a(4),l=a.n(i),c=a(156),o=a.n(c),s=a(142),d=a(143),u=a.n(d),m=function(){return r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:u.a.teaser},r.a.createElement("div",{className:u.a.teaserContentWrap},r.a.createElement("h3",null,"Ihr Partner für Digitale Lösungen"),r.a.createElement("h1",null,"Haben sie den Weg in die Digitalisierung schon gefunden?"),r.a.createElement("p",null,"Wir entwickeln native Mobile-Apps und Full-Stack-Applications mittels effizienter cross-platform Frameworks, aktuellsten Web-Standards, sowie einem modernen und benutzerfreundlichem CMS"),r.a.createElement(s.Link,{to:"/contact",className:u.a.teaserButton},"Schreiben sie Uns"))))},f=(a(155),a(157),a(48),function(e){var A=function(e){return e.map(function(e){return r.a.createElement("li",{key:e.name,style:u.a.navigationItem,activeClassName:"active"},r.a.createElement(s.Link,{to:e.link},e.name))})}(e.items);return r.a.createElement("ul",{className:u.a.navigation},A)}),E=a(147),h=a.n(E),p=function(){return r.a.createElement("div",{className:u.a.logoContainer},r.a.createElement(s.Link,{to:"/"},r.a.createElement(h.a,{className:u.a.logo})))},g=function(e){var A=e.showHeaderTeaser,a=e.menuLinks,n=!0===A?r.a.createElement(m,null):null;return r.a.createElement("header",{className:u.a.header},r.a.createElement("div",{className:u.a.headerOverlay},r.a.createElement("div",{className:u.a.headerTop},r.a.createElement("div",{className:u.a.container},r.a.createElement(p,null),r.a.createElement(f,{items:a}))),n),r.a.createElement(M,null))},b=a(148),I=a(158),j=a.n(I),M=function(){return r.a.createElement(s.StaticQuery,{query:"2903031121",render:function(e){return r.a.createElement("div",{className:u.a.headerImage},r.a.createElement(j.a,{fluid:e.placeholderImage.childImageSharp.fluid}))},data:b})},Y=a(149),N=a.n(Y),v=a(150),B=a.n(v),y=a(151),R=a.n(y),Q=a(152),T=a.n(Q),w=(a(153),function(e){var A=e.children,a=e.showHeaderTeaser;return r.a.createElement(s.StaticQuery,{query:"3436215879",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"icon",type:"image/png",href:""+B.a,sizes:"32x32"},{rel:"icon",type:"image/png",href:""+R.a,sizes:"16x16"},{rel:"apple-touch-icon",type:"image/png",href:""+T.a,sizes:"180x180"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(g,{showHeaderTeaser:a,menuLinks:e.site.siteMetadata.menuLinks}),r.a.createElement("section",{className:N.a.contentSection},A))},data:n})});w.propTypes={children:l.a.node.isRequired};A.a=w}}]);
//# sourceMappingURL=component---src-pages-404-js-201ab7443b3ea20cd08a.js.map