import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Star, Users } from "lucide-react";
import ufoIcon from "@/assets/ufo-icon.png";
import alienIcon from "@/assets/alien-icon.png";

const Index = () => {
  const handleDownload = () => {
    // Aquí iría la lógica para descargar el PDF
    // Por ahora simularemos la descarga
    window.open("#", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-space relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-alien-green rounded-full animate-pulse-green"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-alien-green rounded-full animate-pulse-green delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-alien-green rounded-full animate-pulse-green delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-alien-green rounded-full animate-pulse-green delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img 
              src={alienIcon} 
              alt="Alien" 
              className="w-12 h-12 animate-float filter invert"
            />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-alien bg-clip-text text-transparent">
              El Arte de
            </h1>
            <img 
              src={ufoIcon} 
              alt="UFO" 
              className="w-12 h-12 animate-float delay-1000 filter invert"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Emprender
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Por Maxi Sobotowicz y Martín Navarro
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-space-gray shadow-card-space p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Book info */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  El libro que nos hubiese gustado leer cuando empezamos a emprender
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Descubre los secretos del emprendimiento con una perspectiva única y práctica. 
                  Este libro te guiará a través de las lecciones más importantes que todo 
                  emprendedor necesita conocer.
                </p>
                
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
              </div>

              {/* Download section */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="bg-gradient-glow absolute inset-0 rounded-lg blur-xl opacity-50"></div>
                  <div className="relative bg-card border border-primary/20 rounded-lg p-8">
                    <div className="flex justify-center mb-4">
                      <img 
                        src={ufoIcon} 
                        alt="UFO" 
                        className="w-16 h-16 animate-glow filter invert"
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
                      variant="alien"
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
              src={alienIcon} 
              alt="Alien" 
              className="w-6 h-6 animate-pulse-green filter invert opacity-70"
            />
            <p>Una producción extraterrestre de conocimiento emprendedor</p>
            <img 
              src={alienIcon} 
              alt="Alien" 
              className="w-6 h-6 animate-pulse-green delay-1000 filter invert opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;