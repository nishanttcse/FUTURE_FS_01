"use client"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-serif font-black text-primary mb-4">Nishant Srivastava</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Aspiring Software Developer passionate about building innovative solutions with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Achievements", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase())
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors font-sans"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground font-sans">
                <p>Gorakhpur, Uttar Pradesh</p>
                <p>nishantgenius03@gmail.com</p>
                <p>+91-8423233242</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground font-sans">
              © 2025 Nishant Srivastava. All rights reserved. Built with React.js, Node.js, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
