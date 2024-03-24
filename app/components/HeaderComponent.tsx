export const HeaderComponent = () => {
  return (
    <>
      <div className="flex justify-around mx-4 text-gray-600 py-4 items-center">
        <div className="flex justify-around gap-4">
          <div>Home</div>
          <div> Portfolio </div>
          <div> About Me </div>
          <div>Testimonials</div>
        </div>
        <div>
          <button className="p-4 rounded-sm border">Download CV</button>
        </div>
      </div>
    </>
  );
};
