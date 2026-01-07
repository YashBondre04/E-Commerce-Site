import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = ['Computer.jpg',
  'Cabinet.jpg',
  'Gpu.jpg',
  'Mouse.jpg',
  'Speaker.jpg'];

const Hero = () => {
  return (
    // 1. WRAPPER: Uses 'bg-background' to match the page theme
    <div className="w-full h-[600px] flex items-center justify-center bg-background py-8 pt-0">
      
      <Carousel 
        opts={{
          loop: true,
          align: "center", 
        }}

        // 2. CAROUSEL BG: 
        // - Ideally, put images in the 'public' folder and reference them like '/Image.jpg'
        // - Added 'border-border' so it has a nice outline
        className="w-full max-w-screen-2xl px-4 my-[10px] h-full bg-[url('/Space-Background-Images.jpg')] bg-cover shadow-lg border-y border-border"
      >
        <CarouselContent className="h-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="p-15 h-full flex items-center justify-center">
                
                {/* 3. CARDS: 
                   - bg-card/95: Theme color with slight transparency
                   - backdrop-blur: Frosted glass effect
                   - border-border: Theme border color
                */}
                <Card className="h-[400px] w-[800px] justify-center border border-border shadow-2xl bg-card/95 backdrop-blur-sm p-0">
                  <CardContent className="flex h-full items-center justify-center px-0 py-0">
                    <img
                      src={slides[index]}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* 4. BUTTONS: 
           - Updated to use 'bg-card' and 'text-foreground' 
           - Added hover state
        */}
        <CarouselPrevious className="left-4 h-16 w-10 rounded-l-lg bg-card/80 text-foreground border-border hover:bg-primary hover:text-primary-foreground" />
        <CarouselNext className="right-4 h-16 w-10 rounded-r-lg bg-card/80 text-foreground border-border hover:bg-primary hover:text-primary-foreground" />
      </Carousel>
    </div>
  )
}

export default Hero