import {GithubIcon} from "@/components/icons"
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline"
import {getProjects} from "@/app/lib/data/projects"
import Link from "next/link"
import Image from "next/image"

function ProjectCard ({ title, description, tech, imageUrl, githubUrl, liveUrl }: {
  title: string
  description: string
  tech: string[]
  imageUrl: string
  githubUrl: string
  liveUrl?: string
}) {
  return (
      <div className="w-96 h-140 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30">
        <div className="relative w-full h-48">
          <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col grow">
          <div className="h-60">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 mb-5">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                  <span
                      key={t}
                      className="text-sm font-medium bg-white/10 backdrop-blur-sm text-blue-200 px-3 py-1 rounded-full"
                  >
              {t}
            </span>
              ))}
            </div>
          </div>
          <div className="flex justify-start gap-5 mt-auto pt-6">
            <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white font-medium transition-colors flex items-center"
            >
              <GithubIcon />
              <span className="ml-2">Code</span>
            </Link>
            { liveUrl && (
                <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white font-medium transition-colors flex items-center"
                >
                  <ArrowTopRightOnSquareIcon />
                  <span className="ml-1">Live Demo</span>
                </Link>
            )}
          </div>
        </div>
      </div>
  )
}

export default function Projects (){
  const projects = getProjects()
  return (
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12 text-shadow-medium">
            My Projects
          </h2>
          <div className="flex items-center justify-center flex-wrap gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
  )
}
