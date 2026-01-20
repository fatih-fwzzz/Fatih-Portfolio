"use client";

import { motion } from "framer-motion";

export function ProjectClientWrapper({
  features,
  metrics,
  process,
  techStack
}: {
  features?: any[],
  metrics?: any[],
  process?: any[],
  techStack?: any[]
}) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* METRICS SECTION */}
      {metrics && metrics.length > 0 && (
        <section className="py-20 px-8 bg-blue-600 text-white overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
             <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/50"
            >
              {metrics.map((metric: any, idx: number) => (
                <motion.div
                  key={idx}
                  variants={{
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1, transition: { delay: idx * 0.1, duration: 0.5 } }
                  }}
                  className="pt-8 md:pt-0 px-4"
                >
                  <div className="text-6xl md:text-7xl font-bold mb-2 tracking-tight">
                    {metric.prefix}{metric.value}{metric.suffix}
                  </div>
                  <div className="text-blue-200 text-lg uppercase tracking-widest font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* PROCESS SECTION */}
      {process && process.length > 0 && (
        <section className="py-24 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Was Built</h2>
              <p className="text-gray-500">From concept to deployment</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                   {/* Connector Line (Desktop only) */}
                   {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 -z-10"></div>
                   )}

                  <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center text-xl text-gray-400 mb-6 mx-auto group-hover:border-blue-500 group-hover:text-blue-500 transition-colors shadow-sm">
                    <i className={`fa-solid ${step.icon || "fa-circle-dot"}`}></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-sm text-gray-500 text-center leading-relaxed px-4">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURES SECTION (Existing but styled) */}
      {features && features.length > 0 && (
        <section className="py-24 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-gray-500">Core capabilities delivered</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature: any, idx: number) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <i className={`fa-solid ${feature.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TECH STACK DETAIL SECTION */}
      {techStack && techStack.length > 0 && (
        <section className="py-24 px-8 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold mb-12">Technologies Used</h2>

             <div className="flex flex-wrap justify-center gap-4">
               {techStack.map((tech: any, idx: number) => (
                 <motion.div
                   key={idx}
                   whileHover={{ scale: 1.05 }}
                   className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-200"
                 >
                   <i className={`fa-brands ${tech.icon} text-xl text-gray-600`}></i>
                   <span className="font-semibold text-gray-700">{tech.name}</span>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>
      )}
    </>
  );
}
