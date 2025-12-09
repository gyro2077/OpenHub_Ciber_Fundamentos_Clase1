'use client';
import React, { useState, useEffect } from 'react';
import {
    Terminal, Shield, Ghost, Lock, Cpu, Globe, ChevronRight, ChevronLeft,
    FolderOpen, AlertTriangle, CheckCircle, Download, ExternalLink,
    FileText, User, Server, Wifi, Play, Search, Eye, Activity
} from 'lucide-react';

const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('vmware');

    // Data for slides
    const slides = [
        // 1. PORTADA
        {
            id: 'intro',
            title: 'Virtualización & Linux Ofensivo',
            subtitle: 'Guía Maestra para Iniciar en Ciberseguridad',
            icon:
                <Terminal size={64} className="text-green-400" />,
            content: (
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
                    <div className="p-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full animate-pulse">
                        <div className="bg-slate-900 rounded-full p-4">
                            <Shield size={80} className="text-white" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl text-gray-200">De Cero a Hacker Ético</h3>
                        <p className="text-gray-400 max-w-lg mx-auto">
                            Aprende a montar tu laboratorio, instalar Kali Linux y dominar la terminal sin miedo a romper tu computadora
                            real.
                        </p>
                    </div>

                    <div
                        className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 w-full max-w-md mt-8">
                        <span className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">Presentado por</span>
                        <div className="text-xl font-bold text-white">Yeshua Chiliquinga</div>
                        <div className="flex items-center gap-2 text-purple-400 font-mono mt-1">
                            <Globe size={16} /> Club OpenHub
                        </div>
                    </div>
                </div>
            )
        },
        // 2. CONCEPTO VIRTUALIZACIÓN
        {
            id: 'concept',
            title: 'El Arte de Virtualizar',
            subtitle: '¿Por qué no usar mi Windows normal?',
            icon:
                <Ghost size={48} className="text-purple-400" />,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-red-500">
                            <h4 className="font-bold text-red-400">El Riesgo Real</h4>
                            <p className="text-sm text-gray-300">
                                Las herramientas de hacking pueden ser detectadas como virus por tu antivirus, o peor, puedes ejecutar
                                un comando malicioso por error y borrar tus fotos familiares.
                            </p>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-bold text-green-400">La Solución: Virtualización</h4>
                            <p className="text-sm text-gray-300">
                                Creamos una computadora "falsa" dentro de la tuya. Si la rompes, no pasa nada. Es como un videojuego: si
                                mueres, reinicias la partida (o la máquina virtual).
                            </p>
                        </div>
                    </div>

                    <div className="bg-black p-6 rounded-xl border border-slate-700 relative">
                        <div className="absolute top-2 left-2 text-xs text-gray-500">Tu Computadora (Host)</div>
                        <div className="mt-6 bg-slate-800 p-6 rounded border-2 border-dashed border-blue-500 relative">
                            <div className="absolute -top-3 left-4 bg-slate-800 px-2 text-blue-400 text-xs font-bold">VirtualBox /
                                VMware</div>
                            <div className="bg-slate-900 p-4 rounded border border-green-500 text-center">
                                <span className="text-4xl block mb-2">🐉</span>
                                <span className="text-green-400 font-bold">Kali Linux</span>
                                <p className="text-[10px] text-gray-400 mt-1">Si esto explota, tu PC sigue segura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        // 3. ¿QUÉ ES UN HYPERVISOR?
        {
            id: 'hypervisor-concept',
            title: '¿Qué es un Hypervisor?',
            subtitle: 'El motor detrás de la virtualización',
            icon:
                <Server size={48} className="text-blue-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-center text-gray-300">
                        Un hypervisor es el software que permite crear y ejecutar máquinas virtuales. Es como el director de orquesta que controla todos los recursos.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* HYPERVISOR */}
                        <div className="bg-slate-800 p-5 rounded-xl border-l-4 border-blue-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Server className="text-blue-400" />
                                <h4 className="font-bold text-blue-400">Hypervisor (Virtualización)</h4>
                            </div>
                            <ul className="text-sm text-gray-300 space-y-2">
                                <li>• Crea un sistema operativo <strong>completo</strong> virtual</li>
                                <li>• Incluye su propio kernel (núcleo del OS)</li>
                                <li>• Más aislamiento y seguridad</li>
                                <li>• Consume más recursos (RAM, CPU)</li>
                                <li>• Ejemplos: VirtualBox, VMware, Hyper-V</li>
                            </ul>
                            <div className="mt-4 bg-black p-3 rounded border border-blue-500/30">
                                <div className="text-[10px] text-gray-400 mb-1">Arquitectura</div>
                                <div className="space-y-1 text-xs">
                                    <div className="bg-slate-700 p-1 rounded text-center">Kali Linux VM</div>
                                    <div className="bg-slate-700 p-1 rounded text-center">Windows VM</div>
                                    <div className="bg-blue-600 p-1 rounded text-center font-bold">Hypervisor</div>
                                    <div className="bg-slate-900 p-1 rounded text-center">Hardware Real</div>
                                </div>
                            </div>
                        </div>

                        {/* CONTAINERIZACIÓN */}
                        <div className="bg-slate-800 p-5 rounded-xl border-l-4 border-green-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Cpu className="text-green-400" />
                                <h4 className="font-bold text-green-400">Containerización</h4>
                            </div>
                            <ul className="text-sm text-gray-300 space-y-2">
                                <li>• Comparte el kernel del OS host</li>
                                <li>• Solo aísla procesos y archivos</li>
                                <li>• Más ligero y rápido</li>
                                <li>• Consume menos recursos</li>
                                <li>• Ejemplos: Docker, Podman, LXC</li>
                            </ul>
                            <div className="mt-4 bg-black p-3 rounded border border-green-500/30">
                                <div className="text-[10px] text-gray-400 mb-1">Arquitectura</div>
                                <div className="space-y-1 text-xs">
                                    <div className="bg-slate-700 p-1 rounded text-center">App Container 1</div>
                                    <div className="bg-slate-700 p-1 rounded text-center">App Container 2</div>
                                    <div className="bg-green-600 p-1 rounded text-center font-bold">Docker Engine</div>
                                    <div className="bg-slate-900 p-1 rounded text-center">Linux Kernel</div>
                                    <div className="bg-slate-900 p-1 rounded text-center">Hardware Real</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-900/30 border border-yellow-600/50 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-1" />
                            <div className="text-sm text-yellow-200">
                                <strong>¿Cuál usar para Hacking?</strong> Para aprender ciberseguridad, usa <strong>Hypervisor (VirtualBox/VMware)</strong>.
                                Te da un sistema operativo completo e independiente. Docker es genial para desarrollo, pero no para pentesting inicial.
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        // 4. TIPOS DE HYPERVISORS
        {
            id: 'hypervisor-types',
            title: 'Tipos de Hypervisors',
            subtitle: 'Type 1 (Bare Metal) vs Type 2 (Hosted)',
            icon:
                <Cpu size={48} className="text-purple-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-center text-gray-300">
                        No todos los hypervisors funcionan igual. Hay dos tipos principales según cómo se relacionan con el hardware.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* TYPE 1 */}
                        <div className="bg-slate-800 p-5 rounded-xl border-t-4 border-purple-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Server className="text-purple-400" size={24} />
                                <h4 className="font-bold text-purple-400">Type 1 - Bare Metal</h4>
                            </div>
                            <p className="text-xs text-gray-400 mb-4">Se instala directamente sobre el hardware (sin OS intermedio)</p>

                            <div className="bg-black p-3 rounded border border-purple-500/30 mb-4">
                                <div className="space-y-1 text-xs">
                                    <div className="bg-slate-700 p-2 rounded text-center">VM 1</div>
                                    <div className="bg-slate-700 p-2 rounded text-center">VM 2</div>
                                    <div className="bg-purple-600 p-2 rounded text-center font-bold">Hypervisor Type 1</div>
                                    <div className="bg-slate-900 p-2 rounded text-center">Hardware Físico</div>
                                </div>
                            </div>

                            <ul className="text-sm text-gray-300 space-y-2 mb-4">
                                <li>✅ Máximo rendimiento</li>
                                <li>✅ Usado en servidores empresariales</li>
                                <li>✅ Más seguro y estable</li>
                                <li>❌ Requiere hardware dedicado</li>
                            </ul>

                            <div className="bg-purple-900/20 p-3 rounded border border-purple-500/30">
                                <div className="text-xs font-bold text-purple-300 mb-1">Ejemplos:</div>
                                <div className="text-xs text-gray-300 space-y-1">
                                    <div>• VMware ESXi (datacenters)</div>
                                    <div>• Microsoft Hyper-V Server</div>
                                    <div>• Proxmox VE</div>
                                    <div>• Xen</div>
                                </div>
                            </div>
                        </div>

                        {/* TYPE 2 */}
                        <div className="bg-slate-800 p-5 rounded-xl border-t-4 border-orange-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Terminal className="text-orange-400" size={24} />
                                <h4 className="font-bold text-orange-400">Type 2 - Hosted</h4>
                            </div>
                            <p className="text-xs text-gray-400 mb-4">Se instala como aplicación sobre un OS existente</p>

                            <div className="bg-black p-3 rounded border border-orange-500/30 mb-4">
                                <div className="space-y-1 text-xs">
                                    <div className="bg-slate-700 p-2 rounded text-center">VM Kali Linux</div>
                                    <div className="bg-orange-600 p-2 rounded text-center font-bold">VirtualBox / VMware</div>
                                    <div className="bg-blue-700 p-2 rounded text-center">Windows / macOS / Linux</div>
                                    <div className="bg-slate-900 p-2 rounded text-center">Hardware Físico</div>
                                </div>
                            </div>

                            <ul className="text-sm text-gray-300 space-y-2 mb-4">
                                <li>✅ Fácil de instalar y usar</li>
                                <li>✅ Ideal para aprendizaje</li>
                                <li>✅ No requiere hardware dedicado</li>
                                <li>❌ Menor rendimiento (capa extra)</li>
                            </ul>

                            <div className="bg-orange-900/20 p-3 rounded border border-orange-500/30">
                                <div className="text-xs font-bold text-orange-300 mb-1">Ejemplos:</div>
                                <div className="text-xs text-gray-300 space-y-1">
                                    <div>• VirtualBox ⭐ (Gratis)</div>
                                    <div>• VMware Workstation</div>
                                    <div>• Parallels Desktop (Mac)</div>
                                    <div>• QEMU</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-900/30 border border-blue-600/50 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" />
                            <div className="text-sm text-blue-200">
                                <strong>Para este curso usaremos Type 2</strong> porque es más accesible. VirtualBox o VMware te permiten
                                tener tu Windows/Mac funcionando normalmente y abrir Kali Linux como si fuera otra aplicación.
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        // 5. CONFIGURACIÓN DE VM
        {
            id: 'vm-configuration',
            title: 'Recursos de una Máquina Virtual',
            subtitle: 'RAM, CPU, Disco: ¿Cuánto asignar?',
            icon:
                <Activity size={48} className="text-teal-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-center text-gray-300">
                        Cuando creas una VM, debes decidir cuántos recursos de tu PC real le vas a prestar. ¡Ojo! No puedes dar más de lo que tienes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* RAM */}
                        <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-cyan-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Cpu className="text-cyan-400" size={20} />
                                <h4 className="font-bold text-cyan-400">RAM (Memoria)</h4>
                            </div>
                            <div className="text-xs text-gray-300 space-y-2">
                                <p>Es la memoria temporal donde se ejecutan los programas.</p>
                                <div className="bg-black p-2 rounded">
                                    <div className="text-cyan-300 font-bold mb-1">Recomendación:</div>
                                    <div className="text-[10px] space-y-1">
                                        <div>• Mínimo: 2 GB</div>
                                        <div>• Recomendado: 4 GB</div>
                                        <div>• Óptimo: 8 GB</div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-500">
                                    Si tu PC tiene 8GB, asigna máximo 4GB a la VM. Deja siempre la mitad para tu sistema host.
                                </p>
                            </div>
                        </div>

                        {/* CPU */}
                        <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-pink-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Activity className="text-pink-400" size={20} />
                                <h4 className="font-bold text-pink-400">CPU (Procesador)</h4>
                            </div>
                            <div className="text-xs text-gray-300 space-y-2">
                                <p>Los núcleos que realizan los cálculos.</p>
                                <div className="bg-black p-2 rounded">
                                    <div className="text-pink-300 font-bold mb-1">Recomendación:</div>
                                    <div className="text-[10px] space-y-1">
                                        <div>• Mínimo: 1 core</div>
                                        <div>• Recomendado: 2 cores</div>
                                        <div>• Óptimo: 4 cores</div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-500">
                                    Si tienes 4 cores, asigna 2. Nunca asignes todos o tu PC host se volverá lento.
                                </p>
                            </div>
                        </div>

                        {/* DISCO */}
                        <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-green-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Server className="text-green-400" size={20} />
                                <h4 className="font-bold text-green-400">Disco Duro</h4>
                            </div>
                            <div className="text-xs text-gray-300 space-y-2">
                                <p>Espacio de almacenamiento para archivos y programas.</p>
                                <div className="bg-black p-2 rounded">
                                    <div className="text-green-300 font-bold mb-1">Recomendación:</div>
                                    <div className="text-[10px] space-y-1">
                                        <div>• Mínimo: 20 GB</div>
                                        <div>• Recomendado: 40 GB</div>
                                        <div>• Óptimo: 80 GB</div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-gray-500">
                                    El disco virtual crece dinámicamente. Si asignas 80GB, no ocupa todo de inmediato.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-xl">
                        <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                            <AlertTriangle size={20} />
                            Ejemplo Práctico
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-black p-3 rounded border border-red-500/30">
                                <div className="text-red-400 font-bold mb-2">❌ Configuración Mala</div>
                                <div className="text-xs text-gray-300 space-y-1">
                                    <div>Tu PC: 8GB RAM, 4 cores</div>
                                    <div className="text-red-300">Asignaste a VM: 8GB RAM, 4 cores</div>
                                    <div className="text-[10px] text-gray-500 mt-2">
                                        Resultado: Tu Windows/Mac se congela porque no le dejaste recursos.
                                    </div>
                                </div>
                            </div>
                            <div className="bg-black p-3 rounded border border-green-500/30">
                                <div className="text-green-400 font-bold mb-2">✅ Configuración Buena</div>
                                <div className="text-xs text-gray-300 space-y-1">
                                    <div>Tu PC: 8GB RAM, 4 cores</div>
                                    <div className="text-green-300">Asignaste a VM: 4GB RAM, 2 cores</div>
                                    <div className="text-[10px] text-gray-500 mt-2">
                                        Resultado: Ambos sistemas funcionan fluidos. Puedes alternar entre ellos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-900/30 border border-purple-600/50 p-3 rounded-lg">
                        <div className="text-xs text-purple-200">
                            <strong>💡 Tip Pro:</strong> Puedes cambiar estos valores después. Si notas que Kali va lento,
                            apaga la VM y aumenta la RAM/CPU desde la configuración de VirtualBox/VMware.
                        </div>
                    </div>
                </div>
            )
        },
        // 6. DESCARGAS HIPERVISOR
        {
            id: 'downloads-hypervisor',
            title: 'Paso 1: El Motor (Hipervisor)',
            subtitle: 'Descarga el software necesario',
            icon:
                <Download size={48} className="text-blue-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-center text-gray-300">
                        Necesitas instalar uno de estos dos programas primero. Ambos funcionan, elige el que prefieras.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* VIRTUALBOX */}
                        <div
                            className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-orange-500 transition-colors group">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-orange-500">VirtualBox</h3>
                                <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">Gratis / OpenSource</span>
                            </div>
                            <ul className="text-sm text-gray-400 space-y-2 mb-6">
                                <li>• Recomendado para principiantes.</li>
                                <li>• Funciona en Windows, Mac y Linux.</li>
                                <li>• Comunidad enorme de ayuda.</li>
                            </ul>
                            <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-bold transition-transform active:scale-95">
                                <Download size={18} /> Descargar VirtualBox
                            </a>
                        </div>

                        {/* VMWARE */}
                        <div
                            className="bg-slate-800 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-colors group">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-blue-500">VMware Workstation</h3>
                                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Estándar Pro</span>
                            </div>
                            <ul className="text-sm text-gray-400 space-y-2 mb-6">
                                <li>• Mejor rendimiento gráfico 3D.</li>
                                <li>• Mejor soporte para antenas USB Wi-Fi.</li>
                                <li>• Versión "Player" gratuita para uso personal.</li>
                            </ul>
                            <a href="https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html"
                                target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold transition-transform active:scale-95">
                                <Download size={18} /> Descargar VMware
                            </a>
                        </div>
                    </div>
                </div>
            )
        },
        // 7. DESCARGAS SISTEMAS OPERATIVOS
        {
            id: 'downloads-os',
            title: 'Paso 2: El Sistema (La ISO)',
            subtitle: 'Kali Linux vs Parrot OS',
            icon:
                <Download size={48} className="text-teal-400" />,
            content: (
                <div className="space-y-4">
                    <div className="bg-yellow-900/30 border border-yellow-600/50 p-3 rounded-lg flex items-center gap-3">
                        <AlertTriangle className="text-yellow-500 flex-shrink-0" />
                        <p className="text-xs md:text-sm text-yellow-200">
                            <strong>Tip de Pro:</strong> No descargues la "Installer Image" (ISO). Descarga la <strong>"Virtual Machine
                                Image"</strong>. ¡Ya viene instalada y configurada! Solo es descargar y abrir.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {/* KALI */}
                        <div className="bg-slate-800 p-5 rounded-xl border-t-4 border-indigo-600 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Terminal size={100} />
                            </div>
                            <h3 className="text-2xl font-bold text-indigo-400 mb-1">Kali Linux</h3>
                            <p className="text-xs text-gray-400 mb-4">El rey de la seguridad ofensiva.</p>

                            <div className="space-y-2 text-sm text-gray-300 mb-6">
                                <p>Contiene miles de herramientas preinstaladas como Metasploit, Nmap, Wireshark, etc.</p>
                            </div>

                            <a href="https://www.kali.org/get-kali/#kali-virtual-machines" target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-white text-sm font-bold">
                                <ExternalLink size={14} /> Ir a Kali.org (VM Images)
                            </a>
                        </div>

                        {/* PARROT */}
                        <div className="bg-slate-800 p-5 rounded-xl border-t-4 border-teal-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Shield size={100} />
                            </div>
                            <h3 className="text-2xl font-bold text-teal-400 mb-1">Parrot OS</h3>
                            <p className="text-xs text-gray-400 mb-4">La alternativa ligera y elegante.</p>

                            <div className="space-y-2 text-sm text-gray-300 mb-6">
                                <p>Ideal si tu PC tiene poca RAM. Visualmente hermoso y con herramientas de privacidad (Anonsurf)
                                    incluidas.</p>
                            </div>

                            <a href="https://parrotsec.org/download/" target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-2 bg-teal-600 hover:bg-teal-500 rounded text-white text-sm font-bold">
                                <ExternalLink size={14} /> Ir a ParrotSec.org
                            </a>
                        </div>
                    </div>
                </div>
            )
        },
        // 8. INTRODUCCIÓN A BASH
        {
            id: 'bash-intro',
            title: 'Paso 3: Dominando la Terminal',
            subtitle: 'La Interfaz de Línea de Comandos (CLI)',
            icon:
                <Terminal size={48} className="text-gray-200" />,
            content: (
                <div className="space-y-6">
                    <div className="bg-slate-800 p-4 rounded-lg text-center">
                        <p className="text-gray-300 mb-2">
                            En Windows usas el mouse para abrir carpetas. En Hacking, usas el teclado porque es <strong>más
                                rápido</strong> y puedes automatizar tareas.
                        </p>
                    </div>

                    <div className="bg-black p-4 rounded-lg font-mono text-sm border-l-4 border-green-500 shadow-2xl">
                        <div className="flex gap-2 mb-4 text-gray-500 border-b border-gray-800 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="ml-2 text-xs">kali@kali: ~</span>
                        </div>

                        {/* PWD */}
                        <div className="group mb-4">
                            <div className="flex gap-2">
                                <span className="text-green-400 font-bold">kali@kali:~$</span>
                                <span className="text-white">pwd</span>
                            </div>
                            <div className="text-blue-300">/home/yeshua</div>
                            <div className="text-[10px] text-gray-500 mt-1 pl-4 border-l border-gray-700">
                                Significa "Print Working Directory". Te dice dónde estás parado.
                            </div>
                        </div>

                        {/* LS */}
                        <div className="group mb-4">
                            <div className="flex gap-2">
                                <span className="text-green-400 font-bold">kali@kali:~$</span>
                                <span className="text-white">ls</span>
                            </div>
                            <div className="flex gap-4 text-blue-400 font-bold">
                                <span>Escritorio</span>
                                <span>Descargas</span>
                                <span>Documentos</span>
                                <span className="text-white font-normal">notas.txt</span>
                            </div>
                            <div className="text-[10px] text-gray-500 mt-1 pl-4 border-l border-gray-700">
                                Significa "List". Muestra qué hay en la carpeta actual.
                            </div>
                        </div>

                        {/* CD */}
                        <div className="group">
                            <div className="flex gap-2">
                                <span className="text-green-400 font-bold">kali@kali:~$</span>
                                <span className="text-white">cd Escritorio</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-green-400 font-bold">kali@kali:~/Escritorio$</span>
                                <span className="animate-pulse">_</span>
                            </div>
                            <div className="text-[10px] text-gray-500 mt-1 pl-4 border-l border-gray-700">
                                Significa "Change Directory". Te mueves a esa carpeta.
                            </div>
                        </div>

                    </div>
                </div>
            )
        },
        // 9. GESTIÓN DE ARCHIVOS
        {
            id: 'files',
            title: 'Crear y Destruir',
            subtitle: 'Manipulación de Archivos',
            icon:
                <FolderOpen size={48} className="text-yellow-400" />,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                    <div className="space-y-2">
                        <div className="bg-slate-800 p-3 rounded hover:bg-slate-700 transition">
                            <div className="text-yellow-400 font-mono font-bold">mkdir hacking</div>
                            <div className="text-xs text-gray-400">Make Directory: Crea una carpeta llamada "hacking".</div>
                        </div>
                        <div className="bg-slate-800 p-3 rounded hover:bg-slate-700 transition">
                            <div className="text-blue-400 font-mono font-bold">touch secreto.txt</div>
                            <div className="text-xs text-gray-400">Crea un archivo vacío rápidamente.</div>
                        </div>
                        <div className="bg-slate-800 p-3 rounded hover:bg-slate-700 transition">
                            <div className="text-green-400 font-mono font-bold">cp secreto.txt copia.txt</div>
                            <div className="text-xs text-gray-400">Copy: Copia el archivo.</div>
                        </div>
                        <div className="bg-slate-800 p-3 rounded hover:bg-slate-700 transition">
                            <div className="text-purple-400 font-mono font-bold">mv copia.txt /tmp/</div>
                            <div className="text-xs text-gray-400">Move: Mueve el archivo (o le cambia el nombre).</div>
                        </div>
                        <div className="bg-red-900/20 border border-red-500/30 p-3 rounded hover:bg-red-900/30 transition">
                            <div className="text-red-400 font-mono font-bold">rm secreto.txt</div>
                            <div className="text-xs text-gray-400">Remove: Borra el archivo. <br /><span
                                className="font-bold text-red-300">¡Cuidado! No hay papelera de reciclaje.</span></div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4 flex flex-col items-center justify-center border border-slate-700">
                        <div className="text-center mb-4 text-gray-500 text-xs">SIMULACIÓN VISUAL</div>
                        <div className="flex gap-4 mb-8">
                            <FolderOpen size={40} className="text-yellow-400" />
                            <FileText size={40} className="text-blue-400" />
                        </div>
                        <div className="text-xs text-center text-gray-400 max-w-xs">
                            Usa <code>mkdir</code> para organizar tus proyectos de hacking y <code>touch</code> para crear tus notas de
                            auditoría.
                        </div>
                    </div>
                </div>
            )
        },
        // 10. LEER ARCHIVOS
        {
            id: 'reading',
            title: 'Leer Contenidos',
            subtitle: 'cat, less, head, tail',
            icon:
                <Eye size={48} className="text-cyan-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-center text-gray-300">
                        En Linux no siempre abrimos Word para leer. Leemos directo en la terminal.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-cyan-500">
                            <div className="font-mono text-cyan-300 text-lg mb-1">cat archivo.txt</div>
                            <p className="text-sm text-gray-400">
                                "Concatenate". Muestra <strong>todo</strong> el contenido del archivo de golpe. Útil para textos cortos
                                (contraseñas, notas).
                            </p>
                        </div>

                        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-indigo-500">
                            <div className="font-mono text-indigo-300 text-lg mb-1">less archivo.txt</div>
                            <p className="text-sm text-gray-400">
                                Abre el archivo en un visor que te deja bajar y subir con flechas. Para salir presiona <kbd
                                    className="bg-slate-700 px-1 rounded text-white">q</kbd>.
                            </p>
                        </div>

                        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-pink-500">
                            <div className="font-mono text-pink-300 text-lg mb-1">head -n 5 archivo.txt</div>
                            <p className="text-sm text-gray-400">
                                Muestra solo las primeras 5 líneas. Perfecto para ver de qué trata un archivo gigante.
                            </p>
                        </div>

                        <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-purple-500">
                            <div className="font-mono text-purple-300 text-lg mb-1">tail -f log.txt</div>
                            <p className="text-sm text-gray-400">
                                Muestra el final. El <code>-f</code> (follow) se queda mirando en vivo. Ideal para ver logs de errores
                                en tiempo real.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        // 11. ESTRUCTURA DE DIRECTORIOS LINUX
        {
            id: 'linux-filesystem',
            title: 'El Sistema de Archivos de Linux',
            subtitle: 'Todo es un archivo',
            icon:
                <FolderOpen size={48} className="text-yellow-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-center text-gray-300">
                        En Linux, todo está organizado desde una raíz única <code className="bg-slate-700 px-2 py-1 rounded">/</code>.
                        No hay "C:" o "D:" como en Windows.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-blue-500">
                                <div className="font-mono text-blue-400 font-bold mb-1">/home</div>
                                <p className="text-xs text-gray-300">
                                    Carpetas personales de usuarios. Tu carpeta es <code>/home/kali</code>.
                                    Aquí guardas tus archivos, scripts y proyectos.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-red-500">
                                <div className="font-mono text-red-400 font-bold mb-1">/root</div>
                                <p className="text-xs text-gray-300">
                                    Carpeta del superusuario (administrador). Solo accesible con <code>sudo</code>.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-green-500">
                                <div className="font-mono text-green-400 font-bold mb-1">/etc</div>
                                <p className="text-xs text-gray-300">
                                    Archivos de configuración del sistema. Aquí están los ajustes de red, usuarios, servicios, etc.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-purple-500">
                                <div className="font-mono text-purple-400 font-bold mb-1">/usr/bin</div>
                                <p className="text-xs text-gray-300">
                                    Programas y comandos del sistema. Cuando escribes <code>nmap</code>, se ejecuta desde aquí.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-cyan-500">
                                <div className="font-mono text-cyan-400 font-bold mb-1">/tmp</div>
                                <p className="text-xs text-gray-300">
                                    Archivos temporales. Se borran al reiniciar. Útil para pruebas rápidas.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-orange-500">
                                <div className="font-mono text-orange-400 font-bold mb-1">/var/log</div>
                                <p className="text-xs text-gray-300">
                                    Logs del sistema. Si algo falla, aquí encuentras los registros de errores.
                                </p>
                            </div>

                            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-pink-500">
                                <div className="font-mono text-pink-400 font-bold mb-1">/opt</div>
                                <p className="text-xs text-gray-300">
                                    Software opcional instalado manualmente (no desde repositorios oficiales).
                                </p>
                            </div>

                            <div className="bg-slate-800 p-3 rounded-lg border-l-4 border-teal-500">
                                <div className="font-mono text-teal-400 font-bold mb-1">/dev</div>
                                <p className="text-xs text-gray-300">
                                    Dispositivos de hardware (discos, USB, etc.). En Linux, ¡hasta el hardware es un archivo!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black p-4 rounded-xl border border-gray-700 font-mono text-xs">
                        <div className="text-gray-400 mb-2"># Ejemplo: Navegando por el sistema</div>
                        <div className="space-y-1">
                            <div className="flex gap-2">
                                <span className="text-green-400">kali@kali:~$</span>
                                <span className="text-white">cd /etc</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="text-green-400">kali@kali:/etc$</span>
                                <span className="text-white">ls</span>
                            </div>
                            <div className="text-blue-400">passwd  hosts  network/  ssh/  ...</div>
                            <div className="flex gap-2 mt-2">
                                <span className="text-green-400">kali@kali:/etc$</span>
                                <span className="text-white">cd ~</span>
                                <span className="text-gray-500"># Vuelve a tu carpeta personal</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-900/30 border border-yellow-600/50 p-3 rounded-lg">
                        <div className="text-xs text-yellow-200">
                            <strong>💡 Tip:</strong> El símbolo <code className="bg-slate-700 px-1 rounded">~</code> es un atajo para tu carpeta personal.
                            <code className="bg-slate-700 px-1 rounded">cd ~</code> siempre te lleva a <code>/home/kali</code>.
                        </div>
                    </div>
                </div>
            )
        },
        // 12. PIPES Y REDIRECCIÓN
        {
            id: 'pipes-redirection',
            title: 'Pipes y Redirección',
            subtitle: 'Conectando comandos como LEGO',
            icon:
                <Search size={48} className="text-indigo-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-center text-gray-300">
                        La verdadera magia de Linux: puedes conectar la salida de un comando con la entrada de otro.
                        Esto te hace extremadamente eficiente.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* PIPE */}
                        <div className="bg-slate-800 p-5 rounded-xl border-t-4 border-indigo-500">
                            <div className="flex items-center gap-2 mb-3">
                                <ChevronRight className="text-indigo-400" />
                                <h4 className="font-bold text-indigo-400">Pipe ( | )</h4>
                            </div>
                            <p className="text-xs text-gray-300 mb-3">
                                Envía la salida de un comando como entrada al siguiente.
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-xs space-y-3">
                                <div>
                                    <div className="text-gray-400 mb-1"># Buscar palabra en archivo largo</div>
                                    <div className="text-white">cat usuarios.txt | grep "admin"</div>
                                    <div className="text-gray-500 text-[10px] mt-1">
                                        Lee el archivo y filtra solo líneas con "admin"
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-400 mb-1"># Ver procesos de Firefox</div>
                                    <div className="text-white">ps aux | grep firefox</div>
                                </div>
                                <div>
                                    <div className="text-gray-400 mb-1"># Contar líneas de un archivo</div>
                                    <div className="text-white">cat log.txt | wc -l</div>
                                </div>
                            </div>
                        </div>

                        {/* REDIRECCIÓN */}
                        <div className="bg-slate-800 p-5 rounded-xl border-t-4 border-green-500">
                            <div className="flex items-center gap-2 mb-3">
                                <FileText className="text-green-400" />
                                <h4 className="font-bold text-green-400">Redirección ( {'>'} {'>>'}  )</h4>
                            </div>
                            <p className="text-xs text-gray-300 mb-3">
                                Guarda la salida de un comando en un archivo.
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-xs space-y-3">
                                <div>
                                    <div className="text-gray-400 mb-1"># Sobrescribir archivo</div>
                                    <div className="text-white">echo "Hola" {'>'} saludo.txt</div>
                                    <div className="text-gray-500 text-[10px] mt-1">
                                        Crea o reemplaza el archivo
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-400 mb-1"># Agregar al final (append)</div>
                                    <div className="text-white">echo "Mundo" {'>>'} saludo.txt</div>
                                    <div className="text-gray-500 text-[10px] mt-1">
                                        Añade sin borrar lo anterior
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-400 mb-1"># Guardar resultado de escaneo</div>
                                    <div className="text-white">nmap 192.168.1.1 {'>'} scan.txt</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-xl">
                        <h4 className="font-bold text-purple-400 mb-3">🔥 Ejemplo Avanzado: Combinando Todo</h4>
                        <div className="bg-black p-4 rounded font-mono text-xs">
                            <div className="text-gray-400 mb-2"># Encuentra IPs activas, filtra solo las IPs y guárdalas</div>
                            <div className="text-white mb-3">
                                nmap -sn 192.168.1.0/24 | grep "Nmap scan" | cut -d " " -f 5 {'>'} ips_activas.txt
                            </div>
                            <div className="text-gray-500 text-[10px] space-y-1">
                                <div>1. <code>nmap -sn</code> escanea la red</div>
                                <div>2. <code>| grep</code> filtra solo líneas con IPs encontradas</div>
                                <div>3. <code>| cut</code> extrae solo la columna de la IP</div>
                                <div>4. <code>{'>'}</code> guarda todo en un archivo</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-900/30 border border-blue-600/50 p-3 rounded-lg">
                        <div className="text-xs text-blue-200">
                            <strong>¿Por qué es importante?</strong> En pentesting, procesarás MILES de líneas de logs, escaneos y resultados.
                            Dominar pipes te ahorra horas de trabajo manual.
                        </div>
                    </div>
                </div>
            )
        },
        // 13. GESTORES DE PAQUETES
        {
            id: 'package-managers',
            title: 'Instalando Software en Linux',
            subtitle: 'APT: Tu tienda de aplicaciones',
            icon:
                <Download size={48} className="text-green-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-center text-gray-300">
                        En Linux no descargas .exe de páginas web. Usas un <strong>gestor de paquetes</strong> que instala,
                        actualiza y elimina software de forma segura.
                    </p>

                    <div className="bg-slate-800 p-5 rounded-xl border-l-4 border-green-500">
                        <div className="flex items-center gap-2 mb-3">
                            <Download className="text-green-400" />
                            <h4 className="font-bold text-green-400">APT (Advanced Package Tool)</h4>
                        </div>
                        <p className="text-xs text-gray-300 mb-4">
                            El gestor de paquetes de Kali Linux (basado en Debian). Descarga software desde repositorios oficiales verificados.
                        </p>

                        <div className="space-y-3">
                            <div className="bg-black p-3 rounded">
                                <div className="font-mono text-sm text-cyan-400 mb-1">sudo apt update</div>
                                <p className="text-[10px] text-gray-400">
                                    Actualiza la lista de paquetes disponibles. <strong>Hazlo siempre primero.</strong>
                                </p>
                            </div>

                            <div className="bg-black p-3 rounded">
                                <div className="font-mono text-sm text-green-400 mb-1">sudo apt upgrade</div>
                                <p className="text-[10px] text-gray-400">
                                    Actualiza todos los programas instalados a su última versión.
                                </p>
                            </div>

                            <div className="bg-black p-3 rounded">
                                <div className="font-mono text-sm text-blue-400 mb-1">sudo apt install nmap</div>
                                <p className="text-[10px] text-gray-400">
                                    Instala el programa "nmap". Reemplaza con cualquier herramienta que necesites.
                                </p>
                            </div>

                            <div className="bg-black p-3 rounded">
                                <div className="font-mono text-sm text-red-400 mb-1">sudo apt remove nmap</div>
                                <p className="text-[10px] text-gray-400">
                                    Desinstala el programa. Usa <code>purge</code> en vez de <code>remove</code> para borrar también configuraciones.
                                </p>
                            </div>

                            <div className="bg-black p-3 rounded">
                                <div className="font-mono text-sm text-purple-400 mb-1">apt search metasploit</div>
                                <p className="text-[10px] text-gray-400">
                                    Busca paquetes relacionados con "metasploit" en los repositorios.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-800 p-4 rounded-xl border border-yellow-500/30">
                            <h4 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
                                <AlertTriangle size={18} />
                                Rutina Recomendada
                            </h4>
                            <div className="bg-black p-3 rounded font-mono text-xs space-y-1">
                                <div className="text-gray-400"># Cada vez que inicies Kali:</div>
                                <div className="text-white">sudo apt update</div>
                                <div className="text-white">sudo apt upgrade -y</div>
                                <div className="text-gray-500 text-[10px] mt-2">
                                    El <code>-y</code> acepta automáticamente las actualizaciones
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800 p-4 rounded-xl border border-blue-500/30">
                            <h4 className="font-bold text-blue-400 mb-2">Otros Gestores</h4>
                            <div className="text-xs text-gray-300 space-y-2">
                                <div>
                                    <strong className="text-orange-400">pip</strong> - Para instalar herramientas de Python
                                    <div className="font-mono text-[10px] bg-black p-1 rounded mt-1">pip install requests</div>
                                </div>
                                <div>
                                    <strong className="text-red-400">gem</strong> - Para herramientas de Ruby
                                    <div className="font-mono text-[10px] bg-black p-1 rounded mt-1">gem install wpscan</div>
                                </div>
                                <div>
                                    <strong className="text-green-400">git</strong> - Para clonar repositorios de GitHub
                                    <div className="font-mono text-[10px] bg-black p-1 rounded mt-1">git clone https://...</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-900/30 border border-red-600/50 p-3 rounded-lg">
                        <div className="flex items-start gap-2">
                            <AlertTriangle className="text-red-400 flex-shrink-0 mt-1" size={18} />
                            <div className="text-xs text-red-200">
                                <strong>¡Nunca hagas esto!</strong> No descargues herramientas de hacking desde sitios random.
                                Usa siempre <code>apt</code> o el repositorio oficial de GitHub. Muchos "cracks" y "tools gratis" son malware.
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        // 14. PERMISOS Y SUDO
        {
            id: 'permissions',
            title: 'Permisos y Root',
            subtitle: '¿Quién manda aquí?',
            icon:
                <Lock size={48} className="text-red-500" />,
            content: (
                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-4 bg-slate-800 p-4 rounded-xl">
                        <User size={32} className="text-green-400" />
                        <div className="text-2xl text-gray-500">vs</div>
                        <div className="relative">
                            <User size={32} className="text-red-500" />
                            <div className="absolute -top-2 -right-2 text-yellow-400 text-xs">👑</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <h3 className="font-bold text-red-400">SUDO (SuperUser DO)</h3>
                            <p className="text-sm text-gray-300">
                                Es la palabra mágica. Si un comando te dice "Permission denied", probablemente necesitas poner
                                <code>sudo</code> antes.
                            </p>
                            <div className="bg-black p-3 rounded font-mono text-sm border-l-2 border-red-500">
                                <div className="text-gray-500">$ apt update</div>
                                <div className="text-red-500">E: Could not open lock file...</div>
                                <div className="text-green-400 mt-2">$ sudo apt update</div>
                                <div className="text-white">[sudo] password for kali: ****</div>
                                <div className="text-gray-400">Hit:1 http://kali.download/kali...</div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-blue-400">CHMOD (Change Mode)</h3>
                            <p className="text-sm text-gray-300">Cambia quién puede leer/escribir.</p>

                            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono mt-4">
                                <div className="bg-slate-700 p-2 rounded">
                                    <div className="text-lg font-bold text-white">4</div>
                                    <div className="text-gray-400">Read (R)</div>
                                </div>
                                <div className="bg-slate-700 p-2 rounded">
                                    <div className="text-lg font-bold text-white">2</div>
                                    <div className="text-gray-400">Write (W)</div>
                                </div>
                                <div className="bg-slate-700 p-2 rounded">
                                    <div className="text-lg font-bold text-white">1</div>
                                    <div className="text-gray-400">Execute (X)</div>
                                </div>
                            </div>
                            <div className="bg-slate-900 p-2 rounded text-center text-xs mt-2">
                                <code>chmod 777 archivo</code> = Todo el mundo puede hacer todo (Peligroso).
                                <br />
                                <code>chmod +x script.sh</code> = Hace que el archivo sea ejecutable.
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        // 15. PROCESOS
        {
            id: 'processes',
            title: 'Control de Procesos',
            subtitle: 'top, ps, kill',
            icon:
                <Cpu size={48} className="text-pink-400" />,
            content: (
                <div className="space-y-6">
                    <p className="text-center text-gray-300">
                        A veces los programas se cuelgan. Aquí aprendes a eliminarlos manualmente.
                    </p>

                    <div className="bg-black p-4 rounded-xl border border-gray-700 font-mono text-xs overflow-hidden relative">
                        <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 rounded font-bold animate-pulse">HTOP SIM
                        </div>

                        <div className="grid grid-cols-4 gap-4 border-b border-gray-600 pb-2 mb-2 text-pink-300">
                            <span>PID</span>
                            <span>USER</span>
                            <span>CPU%</span>
                            <span>COMMAND</span>
                        </div>
                        <div className="space-y-1 text-gray-300">
                            <div className="grid grid-cols-4 gap-4">
                                <span className="text-green-400">1</span>
                                <span>root</span>
                                <span>0.1</span>
                                <span>/sbin/init</span>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <span className="text-blue-400">1340</span>
                                <span>kali</span>
                                <span>2.4</span>
                                <span>firefox</span>
                            </div>
                            <div className="grid grid-cols-4 gap-4 text-red-400 font-bold bg-red-900/20">
                                <span>9999</span>
                                <span>kali</span>
                                <span>98.0</span>
                                <span>python mining.py</span>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-gray-700 pt-4">
                            <div className="text-gray-400 mb-2"># Para matar el proceso de minería que consume 98% CPU:</div>
                            <div className="flex gap-2">
                                <span className="text-green-400">$</span>
                                <span className="text-white">kill -9 9999</span>
                            </div>
                            <div className="text-gray-500 mt-1">// "kill -9" es el comando de terminación forzada (inmediata).</div>
                        </div>
                    </div>
                </div>
            )
        },
        // 16. REDES
        {
            id: 'networks',
            title: 'Redes Básicas',
            subtitle: 'Tu identidad en internet',
            icon:
                <Wifi size={48} className="text-cyan-400" />,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-800 p-5 rounded-xl border border-cyan-500/30">
                        <div className="flex items-center gap-3 mb-3">
                            <Globe className="text-cyan-400" />
                            <h3 className="font-bold text-white">ip a / ifconfig</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Te muestra tus interfaces de red.</p>
                        <div className="bg-black p-2 rounded text-[10px] font-mono text-green-400">
                            eth0: inet 192.168.1.15 <br />
                            wlan0: inet 10.0.0.5
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Busca siempre donde dice "inet". Esa es tu IP.</p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-xl border border-purple-500/30">
                        <div className="flex items-center gap-3 mb-3">
                            <Activity className="text-purple-400" />
                            <h3 className="font-bold text-white">ping</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Verifica conectividad.</p>
                        <div className="bg-black p-2 rounded text-[10px] font-mono text-gray-300">
                            $ ping google.com <br />
                            64 bytes from ...: time=14ms <br />
                            64 bytes from ...: time=15ms
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Usa <code>Ctrl + C</code> para detener el ping, si no seguirá para
                            siempre.</p>
                    </div>
                </div>
            )
        },
        // 17. OUTRO
        {
            id: 'outro',
            title: '¡Misión Cumplida!',
            subtitle: 'Siguientes Pasos',
            icon:
                <CheckCircle size={64} className="text-green-500" />,
            content: (
                <div className="text-center space-y-6">
                    <p className="text-xl text-gray-200">
                        Ya tienes el conocimiento teórico. Ahora te toca montar el laboratorio.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-slate-800 p-4 rounded-lg">
                            <span className="text-2xl">📥</span>
                            <h4 className="font-bold mt-2">1. Descargar</h4>
                            <p className="text-xs text-gray-400">VirtualBox + Kali VM</p>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-lg">
                            <span className="text-2xl">⚙️</span>
                            <h4 className="font-bold mt-2">2. Importar</h4>
                            <p className="text-xs text-gray-400">Doble clic al archivo descargado</p>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-lg">
                            <span className="text-2xl">🚀</span>
                            <h4 className="font-bold mt-2">3. Practicar</h4>
                            <p className="text-xs text-gray-400">Abre la terminal y escribe `ls`</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-700">
                        <p className="text-sm text-gray-400 mb-2">Creado con ❤️ y ☕ por</p>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                            Yeshua Chiliquinga
                        </h3>
                        <div className="flex items-center justify-center gap-2 mt-2 text-gray-300">
                            <Globe size={18} />
                            <span className="font-mono font-bold tracking-wider">CLUB OPENHUB</span>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white p-2 font-sans select-none">

            <div className="w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col relative"
                style={{ minHeight: '650px' }}>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-slate-800">
                    <div className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 transition-all duration-300"
                        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
                </div>

                {/* Top Header */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-2 text-gray-500">
                        <Terminal size={16} />
                        <span className="font-mono text-xs uppercase">OpenHub_Course_v1.0</span>
                    </div>
                    <div className="text-xs font-bold text-slate-500">
                        {currentSlide + 1} / {slides.length}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow p-6 md:p-10 overflow-y-auto">
                    <div className="flex flex-col h-full animate-fadeIn">

                        {/* Slide Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-slate-800 rounded-xl shadow-lg border border-slate-700">
                                {slides[currentSlide].icon}
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-white">
                                    {slides[currentSlide].title}
                                </h1>
                                <p className="text-blue-400 font-mono text-sm md:text-base">
                                    {slides[currentSlide].subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Slide Body */}
                        <div className="flex-grow">
                            {slides[currentSlide].content}
                        </div>

                    </div>
                </div>

                {/* Navigation Footer */}
                <div
                    className="p-4 bg-slate-900/90 border-t border-slate-800 flex justify-between items-center backdrop-blur-sm">
                    <button onClick={prevSlide}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-400 hover:text-white transition-colors text-sm">
                        <ChevronLeft size={18} /> Atrás
                    </button>

                    <div className="text-[10px] text-slate-600 font-mono hidden md:block">
                        Yeshua Chiliquinga | OpenHub
                    </div>

                    <button onClick={nextSlide}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-900/20 active:scale-95 text-sm">
                        {currentSlide === slides.length - 1 ? 'Reiniciar' : 'Siguiente'}
                        <ChevronRight size={18} />
                    </button>
                </div>

            </div>

            <style>
                {
                    ` @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.98);
                }

                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            .animate-fadeIn {
                animation: fadeIn 0.3s ease-out forwards;
            }

            /* Scrollbar custom */
            ::-webkit-scrollbar {
                width: 8px;
            }

            ::-webkit-scrollbar-track {
                background: #0f172a;
            }

            ::-webkit-scrollbar-thumb {
                background: #334155;
                border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb:hover {
                background: #475569;
            }

            `
                }
            </style>
        </div>
    );
};

export default Presentation;