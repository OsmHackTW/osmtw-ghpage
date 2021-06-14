/* function Page() {
    const [isDevExpanded, toggleDevExpansion] = useState(false);
    const [isBgnrExpanded, toggleBgnrExpansion] = useState(false);
    return (html code);
} */
<pre>
  <div className="main-question mb-8 flex flex-col divide-y text-gray-800 text-base">
    <div className="item p-2 md:p-8">
      <div href="/" className="flex items-center justify-between" onClick={() => toggleDevExpansion(!isDevExpanded)} onKeyDown={() => toggleBgnrExpansion(isDevExpanded)} aria-hidden="true">

        <h4> 我是開發者 I'm Developer</h4>
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className={`${isDevExpanded ? 'block' : 'hidden'} mt-3`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, ex. Expedita sunt enim, vel amet cumque nulla illum harum. Similique!
      </div>
    </div>
  </div>

  <div className="main-images mb-8 p-16">
    <div className="images grid grid-cols-1 md:grid-cols-3 gap-16">
      <div className="image bg-white rounded-lg shadow-lg overflow-hidden">
        <a href="/">
          <img src="https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg" alt="Contact with Customer support" title="Contact with Customer support" />
          <span className="text-center p-2 text-gray-700 text-sm inline-block w-full">Customer support</span>
        </a>
      </div>

      <div className="image bg-white rounded-lg shadow-lg overflow-hidden">
        <a href="/">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a" alt="Send massage to support disk" title="Send massage to support disk" />
          <span className="text-center p-2 text-gray-700 text-sm inline-block w-full">Send massage</span>
        </a>
      </div>

      <div className="image bg-white rounded-lg shadow-lg overflow-hidden">
        <a href="/">
          <img src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3" alt="Write your feedback" title="Write your feedback" />
          <span className="text-center p-2 text-gray-700 text-sm inline-block w-full">Write feedback</span>
        </a>
      </div>
    </div>
  </div>
</pre>;
