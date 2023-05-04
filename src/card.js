import React from 'react'

export default function Card({ image, title, desc }) {
    return (
        <div>

            <li class="cards_item">
                <div class="card">
                    <div class="card_image">
                        <img src={image} />
                        <span class="card_price"><span>$</span>9</span>
                    </div>
                    <div class="card_content">
                        <h2 class="card_title"> {title}</h2>
                        <div class="card_text">

                            <p> {desc}
                            </p>
                            <hr />

                        </div>
                    </div>
                </div>
            </li>


        </div>
    )
}
