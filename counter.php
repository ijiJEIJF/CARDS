<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$file = 'views.json';
$data = json_decode(file_get_contents($file), true);

// Ottieni l'IP del visitatore
$visitorIP = $_SERVER['REMOTE_ADDR'];

// Controlla se è un nuovo visitatore
if (!isset($data['visitors'][$visitorIP])) {
    $data['visitors'][$visitorIP] = time();
    $data['total_views']++;
    
    // Salva i dati aggiornati
    file_put_contents($file, json_encode($data));
}

// Ritorna il numero totale di visualizzazioni
echo json_encode(['views' => $data['total_views']]);
?> 