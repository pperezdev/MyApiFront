import React, {useRef, useEffect}  from 'react';
import './NavigationComponent.css';

const NavigationComponent = () => {
    const ref = useRef(null);

    useEffect(() => {
        // 👇️ use a ref (best)
        const el2 = ref.current;
        console.log(el2);

        // 👇️ use document.getElementById()
        // should only be used when you can't set a ref prop on the element
        // (you don't have access to the element)
        const el = document.getElementById('mySidenav');
        console.log(el);
    }, []);
    function openNav() {

        ref.el.style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
  
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    return(
        <>
            <span onclick={openNav()}>open</span>
            <div ref={ref} id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick={closeNav()}>&times;</a>
                <a href="#">End-Points</a>
                <a href="#">Connectors</a>
                <a href="#">Triggers</a>
                <a href="#">Data</a>
                <a href="#">Running</a>
                <hr/>
                <a href="#">Document</a>
                <a href="#">About</a>
            </div>
        </>
    )
};

export default NavigationComponent;