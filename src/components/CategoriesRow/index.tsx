import './global.css'
export default function CategoriesRow() {

    return (
        <section className="categories-row">
            <div className="categories-container">
                <a href="#">
                    <img src="/banner-category-1.png" alt="rações" />
                </a>
                <a href="#">
                    <img src="/banner-category-2.png" alt="brinquedos" />
                </a>
                <a href="#">
                    <img src="/banner-category-3.png" alt="acessórios" />
                </a>
            </div>
        </section>
    )
}