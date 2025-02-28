
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-20 max-w-md">
          <div className="inline-block p-4 bg-efeta-50 rounded-full text-efeta-500 mb-6">
            <span className="text-7xl font-display font-bold">404</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-gray-800 font-display">Página não encontrada</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            A página que você está procurando não existe ou foi removida.
          </p>
          
          <Button asChild className="bg-efeta-500 hover:bg-efeta-600 transition-all">
            <Link to="/" className="flex items-center">
              <ArrowLeft size={18} className="mr-2" />
              Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
