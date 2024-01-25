<template>
<main class="max-h-[100vh] overflow-y-hidden">
    <nav class="bg-blue-500 p-4 flex items-center justify-between">
        <div>
            <h1 class="text-white text-xl font-semibold">SALUD 360</h1>
        </div>
        <div class="flex items-center space-x-4">
            <span class="text-white">Bienvenido</span>
            <i class="fas fa-user-circle text-white text-2xl"></i>
        </div>
    </nav>

    <!-- Navegación lateral -->
    <aside class="bg-gray-800 text-white w-64 min-h-screen p-4">
        <nav>
            <ul class="space-y-2">
                <li class="opcion-con-desplegable">
                    <div class="flex items-center justify-between p-2 hover:bg-gray-700">
                        <div class="flex items-center">
                            <i class="fas fa-calendar-alt mr-2"></i>
                            <span>Agenda</span>
                        </div>
                        <i class="fas fa-chevron-down text-xs"></i>
                    </div>
                    <ul class="desplegable ml-4 hidden">
                        <li>
                            <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                                Gestion de citas
                            </a>
                        </li>
                        <li>
                            <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                                Polizas
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="opcion-con-desplegable">
                    <div class="flex items-center justify-between p-2 hover:bg-gray-700">
                        <div class="flex items-center">
                            <i class="fas fa-money-bill-wave mr-2"></i>
                            <span>Contabilidad</span>
                        </div>
                        <i class="fas fa-chevron-down text-xs"></i>
                    </div>
                    <ul class="desplegable ml-4 hidden">
                        <li>
                            <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                                Tratamientos
                            </a>
                        </li>
                        <li>
                            <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                                Gastos
                            </a>
                        </li>
                        <li>
                            <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                                Facturas
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="opcion-con-desplegable">
                    <div class="flex items-center justify-between p-2 hover:bg-gray-700">
                        <div class="flex items-center">
                            <i class="fas fa-chart-bar mr-2"></i>
                            <span>Informes</span>
                        </div>
                        <i class="fas fa-chevron-down text-xs"></i>
                    </div>
                    <ul class="desplegable ml-4 hidden">
                        <li>
                            <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                                Presupuestos
                            </a>
                        </li>
                        <li>
                            <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                                Informe médico
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="opcion-con-desplegable">
                    <div class="flex items-center justify-between p-2 hover:bg-gray-700">
                        <div class="flex items-center">
                            <i class="fas fa-file-alt mr-2"></i>
                            <span>Documentación</span>
                        </div>
                        <i class="fas fa-chevron-down text-xs"></i>
                    </div>
                    <ul class="desplegable ml-4 hidden">
                        <li>
                            <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                                Firmas pendientes
                            </a>
                        </li>
                        <li>
                            <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                                <i class="fas fa-chevron-right mr-2 text-xs"></i>
                                Documentos
                            </a>
                        </li>
                    </ul>
                </li>
                <!-- Agrega más enlaces para la navegación lateral -->
            </ul>
        </nav>
    </aside>
</main>
</template>
<script setup>

import { useRouter } from "vue-router";

const router = useRouter();


</script>
