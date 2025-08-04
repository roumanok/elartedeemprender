import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Star, Users } from "lucide-react";

const Index = () => {
  const handleDownload = () => {
    // Aquí iría la lógica para descargar el PDF
    // Por ahora simularemos la descarga
    window.open("#", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary/25 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img 
              src="/lovable-uploads/2074b0ad-cc4e-4ca6-92f8-1e9ac22525f5.png"
              alt="Alien" 
              className="w-12 h-12 animate-float"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-primary">
              El arte
            </h1>
            <img 
              src="/lovable-uploads/2074b0ad-cc4e-4ca6-92f8-1e9ac22525f5.png"
              alt="UFO" 
              className="w-12 h-12 animate-float delay-1000"
            />
          </div>
          <h1 className="text-4xl md:text-6xl text-book-black mb-4 -mt-2">
            de emprender
          </h1>
          <p className="text-xl text-book-gray max-w-2xl mx-auto">
            Por Maxi Sobotowicz y Martín Navarro
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Book info */}
              <div className="space-y-6">
                <h2 className="text-3xl text-foreground">
                  El libro que nos hubiese gustado leer cuando empezamos a emprender
                </h2>
                
                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Experiencias reales de emprendedores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Estrategias probadas en el mercado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Acceso inmediato en formato PDF</span>
                  </div>
                </div>

                {/* Alien graphics from the book */}
                <div className="flex justify-center mt-8">
                  <img 
                    src="/lovable-uploads/e898aa9c-e7e0-4a82-b7ff-683e69aae8bf.png"
                    alt="Aliens del libro" 
                    className="w-48 h-auto opacity-80"
                  />
                </div>
              </div>

              {/* Download section */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="relative bg-card border-2 border-primary/10 rounded-lg p-8 hover:border-primary/20 transition-colors">
                    <div className="flex justify-center mb-4">
                      <img 
                        src="/lovable-uploads/2074b0ad-cc4e-4ca6-92f8-1e9ac22525f5.png"
                        alt="UFO" 
                        className="w-16 h-16 animate-float"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Descarga Gratuita
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Obtén tu copia digital del libro en formato PDF
                    </p>
                    <Button 
                      onClick={handleDownload}
                      variant="book"
                      size="lg"
                      className="w-full text-lg py-6"
                    >
                      <Download className="w-6 h-6 mr-2" />
                      Descargar PDF
                    </Button>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  * Descarga inmediata • Sin registro requerido
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="flex justify-center items-center gap-2 text-muted-foreground">
            <img 
              src="/lovable-uploads/2074b0ad-cc4e-4ca6-92f8-1e9ac22525f5.png"
              alt="Alien" 
              className="w-6 h-6 animate-pulse opacity-70"
            />
            <p>Una producción extraterrestre de conocimiento emprendedor</p>
            <img 
              src="/lovable-uploads/2074b0ad-cc4e-4ca6-92f8-1e9ac22525f5.png"
              alt="Alien" 
              className="w-6 h-6 animate-pulse delay-1000 opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;