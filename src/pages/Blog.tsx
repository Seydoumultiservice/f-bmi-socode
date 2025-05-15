
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Blog = () => {
  // Sample blog posts data
  const posts = [
    {
      id: 1,
      title: "Comment protéger votre ordinateur contre les virus",
      excerpt: "Découvrez les meilleures pratiques pour protéger efficacement votre ordinateur contre les menaces informatiques actuelles.",
      date: "10 mai 2025",
      category: "Sécurité",
      image: "https://source.unsplash.com/1488590528505-98d2b5aba04b/800x600"
    },
    {
      id: 2,
      title: "Les avantages de Starlink pour les zones rurales",
      excerpt: "Starlink révolutionne l'accès à Internet dans les zones éloignées. Voici pourquoi cette technologie change la donne.",
      date: "2 mai 2025",
      category: "Technologie",
      image: "https://source.unsplash.com/1460925895917-afdab827c52f/800x600"
    },
    {
      id: 3,
      title: "Conseils pour optimiser les performances de votre PC",
      excerpt: "Votre ordinateur est lent ? Découvrez nos astuces pour améliorer ses performances sans avoir à investir dans du nouveau matériel.",
      date: "25 avril 2025",
      category: "Maintenance",
      image: "https://source.unsplash.com/1461749280684-dccba630e2f6/800x600"
    },
    {
      id: 4,
      title: "Initiation à Excel : les formules essentielles",
      excerpt: "Un guide pour débutants sur les formules Excel les plus utiles qui vous feront gagner du temps au quotidien.",
      date: "18 avril 2025",
      category: "Formation",
      image: "https://source.unsplash.com/1498050108023-c5249f4df085/800x600"
    },
    {
      id: 5,
      title: "Comment choisir le bon routeur Wi-Fi pour votre domicile",
      excerpt: "Guide complet pour sélectionner un routeur Wi-Fi adapté à la taille de votre maison et à vos besoins en connectivité.",
      date: "10 avril 2025",
      category: "Réseaux",
      image: "https://source.unsplash.com/1518770660439-4636190af475/800x600"
    },
    {
      id: 6,
      title: "Les bases du traitement de texte pour débutants",
      excerpt: "Apprenez à utiliser efficacement les logiciels de traitement de texte pour créer des documents professionnels.",
      date: "5 avril 2025",
      category: "Bureautique",
      image: "https://source.unsplash.com/1605810230434-7631ac76ec81/800x600"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Actualités & Blog</h1>
            <p className="text-lg text-gray-700">
              Conseils, tutoriels et actualités du monde informatique
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs ml-auto">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-700 mb-6 flex-grow">{post.excerpt}</p>
                  <Button asChild variant="outline" className="self-start">
                    <Link to={`/blog/${post.id}`}>Lire la suite</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="flex justify-center mt-12">
            <Button variant="outline" disabled className="mx-1">Précédent</Button>
            <Button variant="outline" className="mx-1 bg-primary text-white">1</Button>
            <Button variant="outline" className="mx-1">2</Button>
            <Button variant="outline" className="mx-1">3</Button>
            <Button variant="outline" className="mx-1">Suivant</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
            <p className="text-gray-700 mb-6">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles, conseils et actualités.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit">S'abonner</Button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
