import { PageHero } from "@/components/custom/page-hero";

export default function ClassicalEducationPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="What Is Classical Education?"
        subtitle="Cultivating wisdom and virtue through time-tested methods"
        backgroundImage="/ss_50.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction Quote */}
        <div className="text-center mb-16">
          <blockquote className="text-2xl font-serif text-primary italic mb-4">
            &ldquo;The liberal arts can equip a child for effective service in
            the world; catechesis can equip a child for everlasting life.&rdquo;
          </blockquote>
          <cite className="text-slate-600">— Gene Edward Veith</cite>
        </div>

        {/* Overview Section */}
        <div className="prose prose-slate max-w-none mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6">
            The Classical Approach
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Classical education is a time-tested approach that has formed some
            of the greatest minds in history. At Concordia Classical Academy, we
            combine this rich educational heritage with Lutheran theology to
            provide a comprehensive education that nurtures both mind and soul.
          </p>
        </div>

        {/* Trivium Section */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6">The Trivium</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-primary text-xl">Grammar</h3>
              <p className="text-slate-600">
                The foundation stage (grades K-4) where students learn the basic
                facts and rules of each subject through memorization, songs, and
                repetition. This builds the framework for all future learning.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-primary text-xl">Logic</h3>
              <p className="text-slate-600">
                The analytical stage (grades 5-6) where students learn to think
                critically, analyze information, and understand the
                relationships between different fields of knowledge.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-primary text-xl">Rhetoric</h3>
              <p className="text-slate-600">
                The expressive stage (grades 7-8) where students learn to
                articulate their thoughts clearly and persuasively, both in
                writing and speech.
              </p>
            </div>
          </div>
        </div>

        {/* Quadrivium Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6">
            The Quadrivium
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-serif text-primary text-lg mb-3">
                Arithmetic & Geometry
              </h3>
              <p className="text-slate-600 mb-4">
                Students study numbers and their relationships, along with
                spatial reasoning and mathematical proofs. This develops precise
                thinking and problem-solving skills.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-serif text-primary text-lg mb-3">
                Music & Astronomy
              </h3>
              <p className="text-slate-600 mb-4">
                Through music theory and the study of the natural world,
                students learn to appreciate harmony, order, and the
                mathematical principles that govern creation.
              </p>
            </div>
          </div>
        </div>

        {/* Lutheran Integration */}
        <div className="bg-white border border-slate-200 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-serif text-primary mb-6">
            Lutheran Classical Education
          </h2>
          <div className="space-y-6 text-slate-600">
            <p>
              Our classical approach is distinctively Lutheran, integrating
              faith and learning at every level. We recognize that all truth is
              God&apos;s truth, and we teach all subjects through the lens of
              Scripture and the Lutheran Confessions.
            </p>
            <p>
              This integration means that while students learn the liberal arts
              for service in this world, they simultaneously receive catechesis
              that prepares them for eternal life in Christ.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-2xl font-serif text-primary mb-6">
            Benefits of Classical Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-primary">
                Development of Critical Thinking
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Logical reasoning skills
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Analysis and synthesis of information
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Problem-solving abilities
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-primary">
                Formation of Character
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Cultivation of virtues
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Development of wisdom
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Growth in faith and knowledge
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
