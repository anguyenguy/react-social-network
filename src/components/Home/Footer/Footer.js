import React from 'react';
import './Footer.css';


const footer = () =>{
    return(
        <div className="Footer ml-5 text-success mt-3">
                <div className="ml-5" id="pageFooter" data-referrer="page_footer">
                <ul class="List">
                    <li className="text-primary">Tiếng Việt</li>
                    <li>
                        <a class="_sv4" dir="ltr"  title="English (UK)">English (UK)</a>
                    </li>
                    <li>
                        <a class="_sv4" dir="ltr" title="Traditional Chinese (Taiwan)">中文(台灣)</a>
                    </li>
                    <li>
                        <a class="_sv4"  title="Korean">한국어</a>
                    </li>
                </ul>

                <span>Made with ❤ by anguyenguy</span>
                    </div>
        </div>

    )
}

export default footer;