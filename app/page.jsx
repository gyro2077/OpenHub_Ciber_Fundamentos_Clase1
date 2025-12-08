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
        // 3. DESCARGAS HIPERVISOR
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
        // 4. DESCARGAS SISTEMAS OPERATIVOS
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
        // 5. INTRODUCCIÓN A BASH
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
        // 6. GESTIÓN DE ARCHIVOS
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
        // 7. LEER ARCHIVOS (NUEVO)
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
        // 8. PERMISOS Y SUDO
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
        // 9. PROCESOS
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
        // 10. REDES
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
        // 11. OUTRO
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