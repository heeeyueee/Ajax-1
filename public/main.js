let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n+1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1
        }
    };
    request.send();
};
getCSS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('get', '/style.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('success');
                //使用ajax请求css
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                console.log('fail');
            }
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/test.xml')
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            let dom = request.responseXML
            let text = dom.getElementsByTagName('warning')[0].textContent
            console.log(trim(text));
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/test.json')
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            console.log(JSON.parse(request.response).age);

        }
    }
    request.send()
}
getJS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('get', '/next.js');
    request.onload = () => {
        console.log('success');
        //使用ajax请求js
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('fail');

    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get', '/next.html')
    request.onload = () => {
        const html = document.createElement('div')
        html.innerHTML = request.response
        document.body.appendChild(html)

    }
    request.onerror = () => {
        console.log('fail');

    }
    request.send()
}