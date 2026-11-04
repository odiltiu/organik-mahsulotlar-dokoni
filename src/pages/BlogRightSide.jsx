import PageBanner from '../components/PageBanner'
import ShareButtons from '../components/ShareButtons'
import BlogSearch from '../components/BlogSearch'
import { Link } from 'react-router-dom'
import { CATEGORIES, PRODUCTS } from '../data/products'

export default function BlogRightSide() {
  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      <PageBanner title="Blog Details" />

      {/* MAIN LAYOUT WITH RIGHT SIDEBAR */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN - MAIN BLOG CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* MAIN FEATURED IMAGE */}
          <div className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200" 
              alt="Health Benefits of a Raw food" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* META INFO */}
          <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
            <span className="text-red-500">By Admin</span>
            <span>/</span>
            <span>07 Comment</span>
            <span>/</span>
            <span>Date - 09.09.2024</span>
          </div>

          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Health Benefits of a Raw food
          </h2>

          {/* PARAGRAPHS */}
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nihil sunt reprehenderit natus, soluta officia iusto enim neque, iste qui exercitationem et? Beatae debitis ratione molestiae quia atque.
          </p>

          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolores dolor dolore libero cum voluptatem laudantium magni veritatis sint. Aspernatur est quos jam modi laudantium. Assumenda neque vitae corrupti aspernatur, quos vel aliquid hic nisi nostrum repellendus dolorem placeat vero est.
          </p>

          {/* TWO INNER IMAGES WITH CAPTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <div className="w-full h-48 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600" 
                  alt="Green Juice" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-bold text-gray-800 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-full h-48 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600" 
                  alt="Healthy Grains & Veggies" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-bold text-gray-800 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                Lorem ipsum dolor consectetur adipisicing elit. Molestias, dolorum!
              </p>
            </div>
          </div>

          {/* QUOTE BLOCK */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3">
            <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat earum architecto velit soluta quae odio distinctio quos quisquam? Quaerat nulla blanditiis provident quam iusto doloribus vel aliquam delectus pariatur voluptatem cum iste exercitationem rem."
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-red-500">John martin</h4>
              <span className="text-gray-300 font-serif text-2xl">“</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia magni explicabo fuga molestiae architecto ipsa excepturi laudantium molestias accusamus vel fugiat hic exercitationem, necessitatibus itaque atque at id!
          </p>

          {/* TAGS & SHARE BUTTONS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">Cabbage</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">Appetizer</span>
              <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">Fast Food</span>
            </div>

            <ShareButtons />
          </div>


        </div>

        {/* RIGHT COLUMN - SIDEBAR */}
        <aside className="space-y-8">
          
          {/* SEARCH BOX */}
          <BlogSearch />

          {/* CATEGORY LIST */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Category</h3>
            <ul className="space-y-2 text-xs font-medium text-gray-600">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <Link
                    to={`/product-list-left?category=${encodeURIComponent(category)}`}
                    className="flex items-center justify-between hover:text-red-500"
                  >
                    <span>{category}</span>
                    <span className="text-gray-400">({PRODUCTS.filter((product) => product.category === category).length})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RECENT POST */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Recent Post</h3>
            <div className="border border-gray-100 rounded-xl p-3 space-y-2">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" 
                alt="Recent Post" 
                className="w-full h-32 object-cover rounded-lg"
              />
              <span className="text-[10px] text-red-500 font-semibold block">Sep 09, 2024</span>
              <h4 className="text-xs font-bold text-gray-900">10 Tasty Organic Fruit choose</h4>
              <p className="text-[11px] text-gray-400 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          {/* LATEST GALLERY */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Latest Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300',
                'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300',
                'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300',
                'https://images.unsplash.com/photo-1518843875459-f738682238a6?w=300',
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
                'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300',
              ].map((imgUrl, idx) => (
                <div key={idx} className="h-16 rounded-lg overflow-hidden">
                  <img src={imgUrl} alt="Gallery item" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* POPULAR TAGS */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 border-b pb-2">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['Vegetables', 'Juice', 'Food', 'Cabbage', 'Organic Food', 'Juice'].map((tag, idx) => (
                <span key={idx} className="text-[11px] px-3 py-1 bg-gray-50 border border-gray-100 rounded-md text-gray-600 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </aside>

      </main>
    </div>
  );
}