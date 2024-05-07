

const LayoutAdmin = ({ children }) => {
  return (
    
      <div className="container h-full fixed top-28 overflow-x-auto bg-white border-8 border-gray-200 border-solid rounded-lg dark:border-gray-700" id="contenido-tabla">
        <div className="">
          <div className="gap-4 mb-4 bg-white">
            <form className="bg-white w-fulls m-2">
              {children}
            </form>
          </div>
        </div>
      </div>
    
  );
};

export default LayoutAdmin;
